class Gallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.activeTab = 1
  }

  connectedCallback () {
    this.render()
    this.addEventListeners()
    this.getThumbnails()
  }

  async getThumbnails () {
    try {
      const result = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/images`)
      const thumbnails = await result.json()
      this.printThumbnails(thumbnails)
    } catch (error) {
      console.error('Error al obtener miniaturas:', error)
    }
  }

  printThumbnails (thumbnails) {
    console.log(thumbnails)
    thumbnails.rows.forEach(thumbnail => {
      const uploadDiv = this.shadow.querySelector('.card-container-container')

      const cardContainer = document.createElement('div')
      cardContainer.classList.add('card-container')
      uploadDiv.appendChild(cardContainer)

      const imgElement = document.createElement('img')
      imgElement.src = `${import.meta.env.VITE_API_URL}/api/admin/images/${thumbnail.filename}`
      cardContainer.appendChild(imgElement)

      const closeIcon = document.createElement('div')
      closeIcon.classList.add('close-icon')
      closeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="14" fill="red"/><path fill="white" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/></svg>'
      cardContainer.appendChild(closeIcon)

      cardContainer.imgElement = imgElement
      this.setupImageContainerEvents(cardContainer)

      imgElement.addEventListener('click', () => {
        this.toggleImageSelection(imgElement)
      })
    })
  }

  toggleImageSelection (imgElement) {
    if (imgElement && imgElement.classList) {
      imgElement.classList.toggle('selected')
    }
  }

  addEventListeners () {
    const fileDiv = this.shadow.querySelector('.uploadFile')
    fileDiv.addEventListener('click', () => {
      const fileInput = this.shadow.querySelector('.imagen')
      fileInput.click()
    })

    const input = this.shadow.querySelector('input[type="file"]')
    input.addEventListener('change', (event) => {
      this.uploadImage(event.target.files[0])
    })

    const modal = this.shadow.querySelector('.modal-gallery-back')
    document.addEventListener('showGalleryModal', event => {
      modal.classList.add('active')
    })

    const closeButton = this.shadow.querySelector('.close-button')
    closeButton.addEventListener('click', () => this.toggleModal())

    const imageContainers = this.shadow.querySelectorAll('.card-container')
    imageContainers.forEach(container => this.setupImageContainerEvents(container))
  }

  setupImageContainerEvents (container, imgElement) {
    const closeIcon = container.querySelector('.close-icon')
    closeIcon.addEventListener('click', () => {
      this.deleteImage()
    })
    container.addEventListener('click', () => {
      this.toggleImageSelection(imgElement)
    })
  }

  async deleteImage () {
    alert('Eliminar')
  }

  toggleModal () {
    const modal = this.shadow.querySelector('.modal-gallery-back')
    modal.classList.toggle('active')
  }

  render () {
    this.shadow.innerHTML = /* html */ `
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      img {
        border-radius: 1rem;
      }

      .modal-gallery-back {
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10;
        display: none;
      }

      .modal-gallery-back.active {
        display: flex;
      }

      .modal-gallery {
        position: relative;
        width: 90%;
        height: 90vh;
        background-color: lightgreen;
        border: 10px solid darkgreen;
        border-radius: 1rem;
        z-index: 10;
        padding-top: 1rem;
        overflow: hidden;
      }

      .menu-icon {
        position: absolute;
        height: 6rem;
        left: 1rem;
        top: 0rem;
        fill: darkgreen;
      }

      .modal-gallery-title{
        margin-bottom: 2rem;
        text-shadow: 1px 1px 2px black;
        cursor: default;
      }

      .close-button {
        position: absolute;
        top: 0px;
        right: 100px;
        cursor: pointer;
        font-size: 40px;
        color: darkgreen;
        font-family: monospace;
      }

      .close-button svg{
        transition: all 0.3s ease;
        fill: darkgreen;
        width: 4rem;
      }

      .close-button svg:hover {
        transform: scale(1.1);
        fill: crimson;
      }

      .tabs {
        display: flex;
        justify-content: start;
        align-items: start;
        background-color: green;
      }

      .tab {
        width: 5rem;
        font-size: 26px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        padding: 25px;
        background-color: green;
        color: white;
      }

      .modal-gallery-title{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 1rem;
        font-size: 1.5rem;
        color: white;
        font-size: 56px;
        font-weight: bolder;
      }

      .tab-content {
        display: none;
        height: 100%;
      }

      .tab-content.active{
        width: 100%;
        display: flex;
      }

      .tab-content-images {
        overflow: auto;
        padding-left: 1rem;
        padding-top: 1rem;
        flex: 3;
        height: 40rem;
      }

      .tab-content-images::-webkit-scrollbar {
        display: none;
      }

      .tab-content-form {
        padding-right: 1rem;
        padding-left: 1rem;
        padding-top: 1rem;
        background-color: rgb(10, 104, 10);
        color: white;
        box-sizing: border-box;
      }

      .card-container {
        position: relative;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        font-weight: bold;
        font-size: 1.2em;
        cursor: pointer;
        color: #ffffff;
        display: flex;
        height: 190px;
        width: 190px;
        margin: 3px;
        transition: all 0.3s;
        border: 8px solid #90ee90;  
        padding:0;
      }

      .close-icon {
        position: absolute;
        cursor: pointer;
        color: white;
        right: 10px;
        top: 10px;
        transition: all 0.3s;
        opacity: 0;
      }

      .card-container:hover .close-icon{
        opacity: 1;
      }

      .close-icon svg{
        width: 1.5rem;
      }

      .close-icon:hover {
        transform: scale(1.2);
      }

      .card-container img {
        width: 180px; 
        height: 180px;    
      }

      .card-container-container {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 1rem;
        position: relative;
      }

      .gallery {
        flex-direction: column;
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
      }

      .title-form {
        justify-content: center;
        display: flex;
      }

      .upload-button {
        transition: all 0.3s ease;
        justify-content: center;
        align-items: center;
        position: absolute;
        font-size: 24px;
        display: flex;
        padding: 1rem;
        height: 3rem;
        bottom: 2rem;
        width: 8rem;
        right: 2rem;
      }

      .upload-button:hover {
        border-radius: 0.5rem;
      }

      .tab-content-upload {
        padding: 1rem 5rem 0rem 5rem;
        background-color: rgb(10, 104, 10);
        text-align: center;
        color: white;
      }

      button {
        background-color: lightgreen;
        transition: all 0.3s;
        padding: 10px 40px;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 16px;
        color: green;
        border: none;
      }

      button:hover {
        color: white;
      }

      input[type="file"] {
        display: none;
      }

      input[type="text"] {
        height: 3rem;
        font-size: 2rem;
        text-indent: 0.3rem;
        border-radius: 0.5rem;
        padding: 0.5rem;
        border: none;
        outline: none;
      }

      input[type="text"]:focus {
        outline: none;
      }

      label {
        font-size: 30px;
      }

      .uploadFile {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: lightgreen;
        border: darkgreen dashed 5px;
        transition: transform 0.3s ease;
        width: 180px;
        height: 180px;
        margin: 10px;
        border-radius: 1rem;
        cursor: pointer;
      }

      .uploadFile:hover {
        background-color: lightgrey;
        transform: scale(1.02)
      }

      .uploadFile svg {
        width: 5rem;
        fill: darkgreen;
        position: static;
      }

      .selected {
        border: 8px solid steelblue;
      }

    </style>
    
    <div class="modal-gallery-back">
      <div class="modal-gallery">
        <span class="close-button">
          <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
        </span>
        <span>
          <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" /></svg>
        </span>
        <div class="modal-gallery-title">Images</div>
        <div class="tabs">
          <div class="tab active" data-tab="gallery">Gallery</div>
        </div>
    
        <div class="tab-content active" data-tab="gallery">
          <div class="tab-content-images">
            <div class="card-container-container">
            <div class="upload">

              <div class="uploadFile">
                <input type="file" class="imagen" name="file" accept="image/*">
                  <svg width="389" height="324" viewBox="0 0 389 324" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M164.9 164.301L228.6 212.101L260.5 196.201L324.2 234.401V259.901H133V196.201L164.9 164.301Z"/>
                    <path d="M324.3 156.3C324.3 169.5 313.6 180.2 300.4 180.2C287.2 180.2 276.5 169.5 276.5 156.3C276.5 143.1 287.2 132.4 300.4 132.4C313.6 132.4 324.3 143.1 324.3 156.3Z"/>
                    <path d="M64 0H106.7V170.7H64V0Z"/>
                    <path d="M0 64H170.7V106.7H0V64Z"/>
                    <path d="M356.2 68.6992H207.3V100.599H356.2V291.799H101.2V207.699H69.2998V291.799C69.2998 309.299 83.5998 323.699 101.2 323.699H356.2C373.7 323.699 388.1 309.399 388.1 291.799V100.499C388 82.9992 373.7 68.6992 356.2 68.6992Z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-content-form">
            <form class="gallery">
              <label class="title">Name:</label>
              <input type="text">
              <br>
              <label class="alternative">Alternative Name:</label>
              <input type="text">
            </form>
            <button class="upload-button">Upload</button>
          </div>
        </div>

        <div class="tab-content" data-tab="images">
          <div class="tab-content-upload">
            <label for="imagen">Choose image:</label><br>
            <button class="buttonInput">Upload image</button>
          </div>
        </div>
      </div>
    </div>
    `
  }

  uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    const result = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/images`, {
      method: 'POST',
      body: formData
    })

    const filenames = await result.json()

    filenames.forEach(filename => {
      this.appendImage(filename)
    })
  }

  appendImage (filename) {
    const uploadDiv = this.shadow.querySelector('.card-container-container')

    const cardContainer = document.createElement('div')
    cardContainer.classList.add('card-container')
    uploadDiv.appendChild(cardContainer)

    const imgElement = document.createElement('img')
    imgElement.src = `${import.meta.env.VITE_API_URL}/api/admin/images/${filename}`
    cardContainer.appendChild(imgElement)

    const closeIcon = document.createElement('div')
    closeIcon.classList.add('close-icon')
    closeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="14" fill="red"/><path fill="white" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/></svg>'
    cardContainer.appendChild(closeIcon)

    this.setupImageContainerEvents(cardContainer)

    imgElement.addEventListener('click', () => {
      this.toggleImageSelection(imgElement)
    })
  }
}

customElements.define('gallery-modal-component', Gallery)
