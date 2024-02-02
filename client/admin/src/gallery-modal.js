class Gallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.activeTab = 1
  }

  connectedCallback () {
    this.render()
    this.addEventListeners()
  }

  addEventListeners () {
    const imgs = this.shadow.querySelectorAll('.img')

    imgs.forEach(img => {
      img.addEventListener('click', () => {
        imgs.forEach(otherImg => otherImg.classList.remove('selected'))
        img.classList.add('selected')
      })
    })
  }

  render () {
    this.shadow.innerHTML = /* html */ `
      <style>
        * {
          margin: 0;
          padding: 0;
        }

        img {
          border: 2px solid #ccc; 
          border-radius:1rem;
        }

        .selected {
          background-color:#4DD0FA;
          border-radius:1rem;
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
          z-index:10;
          display:none;
        }

        .modal-gallery-back.active {
          display: flex;
        }

        .modal-gallery {
          position: relative;
          width: 90%;
          height: 90vh;
          background-color: lightgreen;
          border:10px solid darkgreen;
          border-radius:1rem;
          z-index: 10;
          padding-top:1rem;
          overflow: hidden;
        }
        .modal-gallery-title{
          margin-bottom:2rem;
          text-shadow: 1px 1px 2px black;
        }

        .close-button {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          font-size:40px;
          color:darkgreen;
          font-family:monospace;
          transition: transform 0.3s ease;
        }

        .close-button svg{
          fill:darkgreen;
          width:4rem;
        }

        .close-button:hover {
          transform: scale(1.1);
        }

        .tabs{
          display:flex;
          justify-content:start;
          align-items:start;
          background-color:green;
        }

        .tab {
          width:5rem;
          font-size:26px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor: pointer;
          padding: 25px;
          background-color:green;
          color:white;
        }
        .tab.active{
          background-color:#4DD0FA;
        }
        .modal-gallery-title{
          display:flex;
          justify-content:center;
          align-items:center;
          margin-left:1rem;
          font-size:1.5rem;
          color:white;
          font-size:56px;
          font-weight:bolder;
        }

        .tab-content {
          display:none;
          height:100%;
        }

        .tab-content.active{
          width: 100%;
          display: flex;
        }

        .tab-content-images{
          padding-left:1rem;
          padding-top:1rem;
          flex:3;
        }
        

        .tab-content-form{
          padding-right:2rem;
          padding-left:2rem;
          padding-top:1rem;
          flex:1;
          background-color:rgb(10, 104, 10);
          color:white;
          box-sizing: border-box;
        }

        .avatar {
          transition: transform 0.3s ease;
          background-color: darkgreen;
          justify-content: center;
          align-items: center;
          border-radius:1rem;
          font-weight: bold;
          font-size: 1.2em;
          cursor:pointer;
          color: #ffffff;
          display: flex;
          height: 190px;
          width: 190px;
          margin: 10px;
        }

        .avatar:hover{
          transform:scale(1.02)
        }

        .avatar img {
          width: 180px; 
          height: 180px; 
        }

        .avatar-container {
          display: flex;
          flex-wrap: wrap;

        }

        .gallery{
          font-family:Arial;
          flex-direction:column;
          margin-top:2rem;
          display:flex;
          gap:1rem;
        }

        .title-form{
          justify-content:center;
          display:flex;
        }

        .upload-button{
          transition: transform 0.3s ease;
          justify-content:center;
          align-items:center;
          position:absolute;
          font-size:24px;
          display:flex;
          padding:1rem;
          height:3rem;
          bottom:2rem;
          width:8rem;
          right:2rem;
        }

        .upload-button:hover{
          transform:scale(1.05)
        }

        .tab-content-upload {
          padding: 1rem 5rem 0rem 5rem;
          background-color:rgb(10, 104, 10);
          text-align: center;
          color:white;
        }

        button {
          background-color: lightgreen;
          border-radius: 1rem;
          padding: 10px 40px;
          cursor: pointer;
          margin-top:1rem;
          font-size: 16px;
          color: green;
          border: none;
        }

        button:hover {
          color:white;
         }

        input[type="file"] {
          display: none;
        }

        input[type="text"] {
          height:3rem;
          font-size:2rem;
          text-indent:0.3rem;
          border-radius:0.5rem;
          border:none;
        }

        .images-preview img {
          width: 180px; 
          height: 180px; 
        }

        label {
          font-size:30px;
        }

        .buttonInput {
          transition: transform 0.3s ease;
        }

        .buttonInput:hover{
          transform:scale(1.05)
        }

      </style>
      
      <div class="modal-gallery-back">
        <div class="modal-gallery">
          <span class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
          </span>
          <div class="modal-gallery-title">Images</div>
          <div class="tabs">
            <div class="tab active" data-tab="gallery">Gallery</div>
            <div class="tab" data-tab="images">Upload</div>
          </div>
      
      
          <div class="tab-content active" data-tab="gallery">
            <div class="tab-content-images">
              <div class="avatar-container">
                <div class="img">
                  <div class="avatar">
                    <img src="https://i.kym-cdn.com/photos/images/original/002/486/119/711.jpg" alt="Imagen meme">
                  </div>
                </div>

                <div class="img">
                  <div class="avatar">
                    <img src="https://i.redd.it/ux74bsifrpda1.jpg" alt="Imagen meme">
                  </div>
                </div>

                <div class="img">
                  <div class="avatar">
                    <img src="https://cdn-icons-png.flaticon.com/512/168/168726.png" alt="Imagen meme">
                  </div>
                </div>
      
              </div>
            </div>
            <div class="tab-content-form">
              <form class="gallery">
                <label class="title">Name:</label>
                <input type="text">
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
              <input type="file" class="imagen" name="imagen" accept="image/*">
            </div>
            <div class="images-preview">
              <div class="avatar">
                <img src="https://i.redd.it/ux74bsifrpda1.jpg"alt="Imagen meme">
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    const input = this.shadow.querySelector('.imagen')
    const buttonInput = this.shadow.querySelector('.buttonInput')
    const previewDiv = this.shadow.querySelector('.images-preview')

    buttonInput.addEventListener('click', (event) => {
      input.click()
    })

    input.addEventListener('change', (event) => {
      // Verifica si se seleccionó algún archivo
      if (input.files && input.files[0]) {
        const reader = new FileReader()
        reader.onload = function (e) {
          const imgPreview = document.createElement('img')
          imgPreview.src = e.target.result
          previewDiv.innerHTML = ''
          previewDiv.appendChild(imgPreview)
        }
        reader.readAsDataURL(input.files[0])
      }
    })

    const main = this.shadow.querySelector('.modal-gallery')
    // console.log(main)
    main?.addEventListener('click', (event) => {
      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        tabClicked.classList.add('active')
        tabActive.classList.remove('active')

        this.shadow.querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })
    const modal = this.shadow.querySelector('.modal-gallery-back')
    document.addEventListener('showGalleryModal', event => {
      modal.classList.add('active')
    })

    const closeButton = this.shadow.querySelector('.close-button')
    closeButton.addEventListener('click', () => modal.classList.remove('active'))

    modal.addEventListener('click', function (event) {
      console.log('Se hizo clic en el contenedor exterior')
      modal.classList.remove('active')
    })

    main.addEventListener('click', function (event) {
      event.stopPropagation()
    })
  }
}

customElements.define('modal-gallery-component', Gallery)
