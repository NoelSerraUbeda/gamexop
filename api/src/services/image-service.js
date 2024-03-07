const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    console.log(images)
    for (let i = 0; i < images.file.length; i++) {
      const originalName = images.file[i].originalname
      if (/\s+/.test(originalName)) {
        const modifiedName = originalName.replace(/\s+/g, '-')
        console.log(`Nombre: ${modifiedName}`)
      } else {
        console.log(`Nombre: ${originalName}`)
      }
    }
  }

  resizeImages = async (images, width, height) => {

  }

  deleteImages = async filename => {

  }
}
