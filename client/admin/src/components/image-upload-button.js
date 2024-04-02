import { store } from '../redux/store.js'
import { setImageGallery, removeImage } from '../redux/images-slice.js'

class UploadImage extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.unsubscribe = null
    this.images = []
  }

  connectedCallback () {
    this.unsubscribe = store.subscribe(() => {
      const currentState = store.getState()
      this.images = currentState.images.showedImages
      this.showThumbnails(this.images)
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML = /* html */ `
    <style>
      .form-element {
        display:flex;
        justify-content:start;
        align-items:start;
        gap:8rem; 
        margin:1rem 0 1rem 0;
      }

      .form-element-input{
        display:flex;
        flex-direction:row;
        justify-content:start;
        gap:4rem;
        width:100%;
      }

      .open-gallery {
        width: 100px;
        height: 100px;
        padding:1rem;
        border: none;
        background-color:green;
        text-align: center;
        cursor: pointer;
        border-radius:1rem;
        transition: transform 0.3s ease;
        display:flex;
        flex-direction:column;
      }

      .open-gallery:hover{
        transform:scale(1.05)
      }

      .open-gallery svg {
        fill:white;
      }

      .gallery {
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        flex-wrap:wrap;
      }

      .choosed {
        border: 5px dashed darkgreen;
        border-radius:5px;
        width:120px;
        height:120px;
        position:relative
      }

      .choosed img{
        overflow:hidden;
        width:120px;
        height:120px;
        z-index:1;
      }

      .close {
        display: none;
        position: absolute;
        width: 1.5rem;
        top: 5px;
        right: 5px;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s;
      }

      .close:hover{
        transform: scale(1.1);
      }

      .thumbnail {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      .close {
        display: none;
        position: absolute;
        width: 1.5rem;
        top: 5px;
        right: 5px;
        cursor: pointer;
        z-index: 2;
        transition: all 0.3s;
      }

      .close:hover {
        transform: scale(1.1);
      }

    </style>

    <div class="form-row">
      <div class="form-element">
        <div class="form-element-input">
          <div class="gallery">
            <div class="open-gallery">
              <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
                <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
              </svg>
            </div>

            <div class="choosed">
              <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="14" fill="red"/><path fill="white" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/>
                </svg>

              </div>
            </div>
          
            <div class="choosed">
              <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="14" fill="red"/><path fill="white" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/>
                </svg>

              </div>
            </div>

            <div class="choosed">
              <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="14" fill="red"/><path fill="white" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/>
                </svg>

              </div>
            </div>

            <div class="choosed">
              <div class="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="14" fill="red"/><path fill="white" d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z"/>
                </svg>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    `
    const upButtons = this.shadow.querySelectorAll('.open-gallery')
    upButtons.forEach(button => {
      button.addEventListener('click', () => {
        const image = {
          name: this.getAttribute('name')
        }

        store.dispatch(setImageGallery(image))
        document.dispatchEvent(new CustomEvent('showGalleryModal', {
        }))
      })
    })

    const closeButtons = this.shadow.querySelectorAll('.close')
    closeButtons.forEach(button => {
      button.addEventListener('click', (event) => {
        alert('eliminar')
      })
    })
  }

  showThumbnails (images) {
    const galleryDiv = this.shadow.querySelector('.gallery')

    const choosedDivs = galleryDiv.querySelectorAll('.choosed')
    choosedDivs.forEach((div, index) => {
      if (images[index]) {
        div.classList.add('thumbnail')
        div.style.backgroundImage = `url('${import.meta.env.VITE_API_URL}/api/admin/images/${images[index].filename}')`
        div.querySelector('.close').classList.add('close')
        div.querySelector('.close').style.display = 'block'
      } else {
        div.querySelector('.close').style.display = 'none'
      }
    })
  }
}

customElements.define('upload-image-component', UploadImage)
