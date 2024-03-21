const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    const result = []

    for (const image of images.file) {
      try {
        const originalName = image.originalname
        const filename = originalName.replace(/\s+/g, '-')

        const newfilename = await fs.access(path.join(__dirname, `../storage/images/gallery/original/${path.parse(filename).name}.webp`)).then(async () => {
          // TODO Dar al usuario la opción de sobreescribir la imagen
          return `${path.parse(filename).name}-${new Date().getTime()}.webp`
        }).catch(async () => {
          return `${path.parse(filename).name}.webp`
        })

        await sharp(image.buffer)
          .webp({ lossless: true })
          .toFile(path.join(__dirname, `../storage/images/gallery/original/${newfilename}`))

        await sharp(image.buffer)
          .resize(135, 135)
          .webp({ quality: 80 })
          .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${newfilename}`))

        result.push(newfilename)
      } catch (error) {
        console.log(error)
      }
    }

    return result
  }

  resizeImages = async (images, width, height) => {

  }

  deleteImages = async filename => {
    try {
      await fs.unlink(path.join(__dirname, `../storage/images/gallery/original/${filename}`))
      await fs.unlink(path.join(__dirname, `../storage/images/gallery/thumbnail/${filename}`))

      return 1
    } catch {
      return 0
    }
  }
}
