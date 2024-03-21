const moment = require('moment')
const mongoose = require('mongoose')
const Image = mongoose.model('Image')

exports.create = async (req, res) => {
  try {
    const result = await req.imageService.uploadImage(req.files)

    for (const filename of result) {
      await Image.create({ filename })
    }

    res.status(200).send(result)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Algún error ha surgido al crear la imagen.'
    })
  }
}

exports.findAll = async (req, res) => {
  try {
    const page = req.query.page || 1
    const limit = parseInt(req.query.size) || 10
    const offset = (page - 1) * limit

    const result = await Image.find({ deletedAt: { $exists: false } })
      .skip(offset)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean()
      .exec()

    const count = await Image.countDocuments({ deletedAt: { $exists: false } })

    const response = {
      rows: result.map(doc => ({
        ...doc,
        id: doc._id,
        _id: undefined,
        createdAt: moment(doc.createdAt).format('YYYY-MM-DD HH:mm'),
        updatedAt: moment(doc.updatedAt).format('YYYY-MM-DD HH:mm')
      })),
      meta: {
        total: count,
        pages: Math.ceil(count / limit),
        currentPage: page
      }
    }

    res.status(200).send(response)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Algún error ha surgido al recuperar los datos.'
    })
  }
}

exports.findOne = (req, res) => {
  const filename = req.params.filename

  const options = {
    root: __dirname + '../../../storage/images/gallery/thumbnail/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(filename, options)
}

exports.update = async (req, res) => {
  const id = req.params.id

  try {
    const updatedImage = await Image.findByIdAndUpdate(id, req.body, { new: true })

    if (updatedImage) {
      res.status(200).send({
        message: 'La imagen ha sido actualizada correctamente.'
      })
    } else {
      res.status(404).send({
        message: `No se puede actualizar la imagen con la id=${id}.`
      })
    }
  } catch (err) {
    res.status(500).send({
      message: 'Algún error ha surgido al actualizar la imagen con la id=' + id
    })
  }
}

exports.delete = async (req, res) => {
  const filename = req.params.filename

  try {
    await req.imageService.deleteImages(filename)
    await Image.deleteOne({ filename })
    res.status(200).send({
      message: 'El elemento ha sido borrado correctamente'
    })
  } catch (error) {
    res.status(500).send({
      message: error.message || 'Algún error ha surgido al borrar el dato.'
    })
  }

  console.log(filename)
}

exports.getImage = (req, res) => {
}
