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
      .form-element-input {
        display:flex;
      }

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
        text-shadow: 1px 1px 2px black;
      }
    </style>

    <div class="form-row">
      <div class="form-element">
        <div class="form-element-label">
          <label for="main-image">Image Gallery</label>
        </div>
        <div class="form-element-input">
          <div class="button">
            <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
              <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
            </svg>
          </div>

          <div class="button">
            <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
              <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
            </svg>
          </div>

          <div class="button">
            <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
              <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
            </svg>
          </div>
          
        </div>
      </div>
    </div>
      `
    const upButtons = this.shadow.querySelectorAll('.button')
    upButtons.forEach(button => {
      button.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('showGalleryModal', {
        }))
      })
    })
  }
}

customElements.define('upload-image-component', UploadImage)
