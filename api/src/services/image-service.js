const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    const result = []

    for (const image of images.file) {
      try {
        const originalName = image.originalname
        const fileName = originalName.replace(/\s+/g, '-')

        const newFilename = await fs.access(path.join(__dirname, `../storage/images/gallery/original/${path.parse(fileName).name}.webp`)).then(async () => {
          // TODO Dar al usuario la opción de sobreescribir la imagen
          return `${path.parse(fileName).name}-${new Date().getTime()}.webp`
        }).catch(async () => {
          return `${path.parse(fileName).name}.webp`
        })

        await sharp(image.buffer)
          .webp({ lossless: true })
          .toFile(path.join(__dirname, `../storage/images/gallery/original/${newFilename}`))

        await sharp(image.buffer)
          .resize(135, 135)
          .webp({ quality: 80 })
          .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${newFilename}`))

        result.push(newFilename)
      } catch (error) {
        console.log(error)
      }
    }

    return result
  }

  resizeImages = async (images, width, height) => {

  }

  deleteImages = async fileName => {

  }
}
