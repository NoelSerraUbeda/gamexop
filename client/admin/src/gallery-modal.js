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

    const fileDiv = this.shadow.querySelector('.file')
    fileDiv.addEventListener('click', () => {
      const fileInput = this.shadow.querySelector('.imagen')
      fileInput.click()
    })

    const input = this.shadow.querySelector('.imagen')
    const buttonInput = this.shadow.querySelector('.buttonInput')

    buttonInput.addEventListener('click', (event) => {
      input.click()
    })

    input.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0]
      if (selectedFile) {
        alert(`Selected file: ${selectedFile.name}`)
      }
    })

    const modal = this.shadow.querySelector('.modal-gallery-back')
    document.addEventListener('showGalleryModal', event => {
      modal.classList.add('active')
    })

    const closeButton = this.shadow.querySelector('.close-button')
    closeButton.addEventListener('click', () => modal.classList.remove('active'))
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
       
        svg {
          position:absolute;
          height:6rem;
          left:1rem;
          top:0rem;
          fill:darkgreen;
        }

        .modal-gallery-title{
          margin-bottom:2rem;
          text-shadow: 1px 1px 2px black;
          cursor: default;
        }

        .close-button {
          position: absolute;
          top: 0px;
          right: 100px;
          cursor: pointer;
          font-size:40px;
          color:darkgreen;
          font-family:monospace;
        }

        .close-button svg{
          transition: transform 0.3s ease;
          fill:darkgreen;
          width:4rem;
        }

        .close-button svg:hover {
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
          cursor: default;
          padding: 25px;
          background-color:green;
          color:white;
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
          padding-right:1rem;
          padding-left:1rem;
          padding-top:1rem;
          background-color:rgb(10, 104, 10);
          color:white;
          box-sizing: border-box;
        }

        .avatar {
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

        .avatar img {
          width: 180px; 
          height: 180px; 
        }

        .avatar-container {
          display: flex;
          flex-wrap: wrap;
          overflow: auto;
          height: 39rem;
          padding-bottom:1rem;
        }


        .avatar-container::-webkit-scrollbar {
          display: none;
        }

        .gallery{
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
          padding:0.5rem;
          border:none;
          outline:none;
        }

        input[type="text"]:focus{
          outline:none;
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

        .file {
          display:flex;
          align-items:center;
          justify-content:center;
          background-color:lightgreen;
          border:darkgreen dashed 5px;
          transition: transform 0.3s ease;
          width:180px;
          height:180px;
          margin: 10px;
          border-radius:1rem;
        }

        
        .file:hover{
          background-color:lightgrey;
          transform:scale(1.02)
        }

        .file svg{
          width:5rem;
          fill:white;
          position:static;
        }

        .img {
          height:210px;
        }

      </style>
      
      <div class="modal-gallery-back">
        <div class="modal-gallery">
          <span class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
          </span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cat</title><path d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z" /></svg>
          </span>
          <div class="modal-gallery-title">Images</div>
          <div class="tabs">
            <div class="tab active" data-tab="gallery">Gallery</div>
          </div>
      
      
          <div class="tab-content active" data-tab="gallery">
            <div class="tab-content-images">
              <div class="avatar-container">
                <div class="upload">
                  <div class="file">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                  </div>
                </div>
              
              
                <div class="img">
                  <div class="avatar">
                    <img src="https://i.imgflip.com/5ltiyp.png" alt="Imagen meme">
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
              <input type="file" class="imagen" name="imagen" accept="image/*">
            </div>
          </div>
        </div>
      </div>
    `
    const input = this.shadow.querySelector('.imagen')
    const buttonInput = this.shadow.querySelector('.buttonInput')

    buttonInput.addEventListener('click', (event) => {
      input.click()
    })

    const modal = this.shadow.querySelector('.modal-gallery-back')
    document.addEventListener('showGalleryModal', event => {
      modal.classList.add('active')
    })

    const closeButton = this.shadow.querySelector('.close-button')
    closeButton.addEventListener('click', () => modal.classList.remove('active'))
  }
}

customElements.define('gallery-modal-component', Gallery)
