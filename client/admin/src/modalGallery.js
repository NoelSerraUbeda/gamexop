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
  }

  render () {
    this.shadow.innerHTML = /* html */ `
      <style>
        * {
          margin: 0;
          padding: 0;
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
           /* Semi-transparent background */
        }

        .modal-gallery-back.active {
          display: flex;
        }

        .modal-gallery {
          position: relative;
          width: 80%;
          height: 80vh;
          background-color: lightgreen;
          border:10px solid darkgreen;
          border-radius:1rem;
          z-index: 10;
          padding-top:1rem;
          overflow: hidden;
        }
        .modal-gallery-title{
          margin-bottom:2rem;
          text-shadow: 
          1px 1px 0 #000, 
          -1px -1px 0 #000, 
          0.5px -1px 0 #000, 
          -1px 0px 0 #000; 
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

        .close-button:hover {
          transform: scale(1.1);
        }

        .tabs{
          display:flex;
          justify-content:start;
          align-items:start;
          border-bottom:solid 3px darkgreen;
          background-color:darkgreen;
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
          background-color:blue;
        }
        .modal-gallery-title{
          display:flex;
          justify-content:center;
          align-items:center;
          margin-left:1rem;
          font-size:1.5rem;
          color:white;
          font-size:36px;
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
          background-color:green;
          color:white;
          box-sizing: border-box;
        }

        .avatar {
          width: 210px;
          height: 210px;
          background-color: darkgreen;
          margin: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ffffff;
          font-weight: bold;
          font-size: 1.2em;
        }

        .avatar img {
          width:200px;
        }

        .avatar-container {
          display: flex;
          flex-wrap: wrap;

        }

        .gallery{
          display:flex;
          flex-direction:column;
          gap:1rem;
          margin-top:2rem;
        }

        .title-form{
          display:flex;
          justify-content:center;
        }

        .upload-button{
          display:flex;
          justify-content:center;
          align-items:center;
          width:8rem;
          height:3rem;
          position:absolute;
          bottom:2rem;
          right:2rem;
          padding:1rem;
          font-size:24px;
        }

        .tab-content-upload {
          background-color: green;
          color:white;
          padding: 1rem 5rem 0rem 5rem;
          text-align: center;
        }

        button {
          background-color: lightgreen;
          color: green;
          border: none;
          padding: 10px 40px;
          font-size: 16px;
          border-radius: 1rem;
          cursor: pointer;
          margin-top:1rem;
        }

        button:hover {
          background-color: darkgreen;
          color:white;
         }

        input[type="file"] {
          display: none;
        }

        input[type="text"] {
          height:3rem;
          font-size:2rem;
          text-indent:0.3rem;
        }

        .images-preview img {
          max-width: 200px; 
          max-height: 150px; 
          width: auto; 
          height: auto; 
          border: 1px solid #ccc; 
        }

        label {
          font-size:30px;
        }

      </style>
      
      <div class="modal-gallery-back">
        <div class="modal-gallery">
          <span class="close-button">X</span>
          <div class = "modal-gallery-title">Images</div>
          <div class="tabs">
            <div class="tab active" data-tab="gallery">Gallery</div>
            <div class="tab" data-tab="images">Upload</div>
          </div>


        <div class="tab-content active" data-tab="gallery">
          <div class="tab-content-images">
          <div class="avatar-container">

          <div class="avatar"><img src="https://i.kym-cdn.com/photos/images/original/002/486/119/711.jpg" alt="Imagen meme">
          </div>

        </div>
          </div>
          <div class="tab-content-form">
            <form class ="gallery">
              <label class="title">Name</label>
              <input type="text">
              <label class="alternative">Alternative Name</label>
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
        </div>
      </div>
      </div>
      `

    const input = this.shadow.querySelector('.imagen')
    const buttonInput = this.shadow.querySelector('.buttonInput')
    const previewDiv = this.shadow.querySelector('.images-preview');


    buttonInput.addEventListener('click', (event) => {
      input.click()
    })

    input.addEventListener('change', (event) => {
      // Verifica si se seleccionó algún archivo
      if (input.files && input.files[0]) {
        const reader = new FileReader();
    
        // Configura la función que se ejecutará cuando la lectura del archivo esté completa
        reader.onload = function (e) {
          // Crea un elemento de imagen y establece su src como la vista previa
          const imgPreview = document.createElement('img');
          imgPreview.src = e.target.result;
    
          // Limpia cualquier contenido previo en el div de vista previa
          previewDiv.innerHTML = '';
    
          // Agrega la imagen al div de vista previa
          previewDiv.appendChild(imgPreview);
        };
    
        // Lee el archivo como una URL de datos
        reader.readAsDataURL(input.files[0]);
      }
    });



    const main = this.shadow.querySelector('.modal-gallery')
    // console.log(main)
    main?.addEventListener('click', (event) => {
      // event.preventDefault()

      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        // console.log(tabClicked)
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
      event.stopPropagation() // Evita que el evento se propague al contenedor exterior
      // console.log('Se hizo clic en el contenedor interior')
    })
  }
}

customElements.define('modal-gallery-component', Gallery)
