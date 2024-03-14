const mongooseDb = require('../../models/mongoose')
const Image = mongooseDb.Image

exports.create = async (req, res) => {
  const result = await req.imageService.uploadImage(req.files)

  for (const filename of result) {
    await Image.create({ filename })
  }

  res.status(200).send(result)
}

exports.findAll = (req, res) => {
  const page = req.query.page || 1
  const limit = parseInt(req.query.size) || 10
  const offset = (page - 1) * limit

  Image.findAndCountAll({
    attributes: ['id', 'entity', 'name', 'title', 'languageAlias', 'createdAt', 'updatedAt'],
    limit,
    offset,
    order: [['createdAt', 'DESC']]
  })
    .then(result => {
      result.meta = {
        total: result.count,
        pages: Math.ceil(result.count / limit),
        currentPage: page
      }

      res.status(200).send(result)
    })
    .catch(err => {
      res.status(500).send({
        message: err.errors || 'Algún error ha surgido al recuperar los datos.'
      })
    })
}

exports.findOne = (req, res) => {
  const fileName = req.params.filename

  const options = {
    root: __dirname + '../../../storage/images/gallery/thumbnail/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  res.sendFile(fileName, options)
}

exports.update = (req, res) => {
  const id = req.params.id

  Image.update(req.body, {
    where: { id }
  })
    .then(([numberRowsAffected]) => {
      if (numberRowsAffected === 1) {
        res.status(200).send({
          message: 'El elemento ha sido actualizado correctamente.'
        })
      } else {
        res.status(404).send({
          message: `No se puede actualizar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento o el cuerpo de la petición está vacío.`
        })
      }
    })
    .catch(_ => {
      res.status(500).send({
        message: 'Algún error ha surgido al actualizar la id=' + id
      })
    })
}

exports.delete = (req, res) => {
  const id = req.params.id

  Image.destroy({
    where: { id }
  })
    .then((numberRowsAffected) => {
      if (numberRowsAffected === 1) {
        res.status(200).send({
          message: 'El elemento ha sido borrado correctamente'
        })
      } else {
        res.status(404).send({
          message: `No se puede borrar el elemento con la id=${id}. Tal vez no se ha encontrado el elemento.`
        })
      }
    })
    .catch(_ => {
      res.status(500).send({
        message: 'Algún error ha surgido al borrar la id=' + id
      })
    })
}

exports.getImage = (req, res) => {
}
