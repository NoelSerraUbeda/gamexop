class UploadImage extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = /* html */ `
      <style>
        .button {
          width: 100px;
          height: 100px;
          border: none;
          background-color:green;
          text-align: center;
          line-height: 100px;
          margin: 10px;
          padding:2rem;
          cursor: pointer;
          border-radius:1rem;
          transition: transform 0.3s ease;
        }

        .button:hover{
          transform:scale(1.05)
        }

        .button svg {
          fill:white;
        }

        label {
          font-size:26px;
          text-shadow: 
          2px 2px 0 #000, 
          -1px -1px 0 #000, 
          1px -1px 0 #000, 
          -1px 0px 0 #000; 
        }

        .button::before {
          content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Ctitle%3Efolder-upload-outline%3C/title%3E%3Cpath d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' /%3E%3C/svg%3E");
          font-size: 30px;
        }
      </style>
      
      <div class="form-row">
      <div class="form-element">
        <div class="form-element-label">
          <label for="main-image">Image Gallery</label>
        </div>
        <div class="form-element-input">
          <div class="button">
          </div>
        </div>
      </div>
    </div>
      `

    const upButton = this.shadow.querySelector('.button')
    upButton?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('showGalleryModal', {
      }))
    })
  }
}

customElements.define('upload-image-component', UploadImage)
