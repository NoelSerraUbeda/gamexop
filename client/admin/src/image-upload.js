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
      .form-element {
        display:flex;
        justify-content:center;
        align-items:start;
        gap:8rem;
      }

      .form-element-input{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
      }

      .form-element-input label {
        margin-top:1rem;
      }

      .button {
        width: 80px;
        height: 80px;
        border: none;
        background-color:green;
        text-align: center;
        line-height: 100px;
        margin: 10px;
        padding:2rem;
        cursor: pointer;
        border-radius:1rem;
        transition: transform 0.3s ease;
        display:flex;
        flex-direction:column;

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

      .choosed {
        background-color:none;
        border: 5px dashed darkgreen;
        border-radius:1rem;
        width:180px;
        height:180px;
        margin-top:1rem;
      }

      .choosed label{
        font-size:16px;
      }

      .choosed img{
        border-radius:1rem;
        width:180px;
        height:180px;
      }

    </style>

    <div class="form-row">
      <div class="form-element">

        <div class="form-element-input">
          <label>Avatar</label>
          <div class="button">
            <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
              <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
            </svg>
          </div>
          <div class="choosed">
            <img src="https://i.redd.it/ux74bsifrpda1.jpg" alt="Imagen meme">
          </div>
        </div>

        <div class="form-element-input">
        <label>Avatar</label>
          <div class="button">
            <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
              <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
            </svg>
          </div>
          <div class="choosed">

          </div>
          <div class="choosed">

          </div>
        </div>

        <div class="form-element-input">
        <label>Avatar</label>
          <div class="button">
            <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'>
              <path d='M20 18H4V8H20M20 6H12L10 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V8A2 2 0 0 0 20 6M16 17H14V13H11L15 9L19 13H16Z' />
            </svg>
          </div>
          <div class="choosed">

          </div>
          <div class="choosed">

          </div>
          <div class="choosed">

          </div>
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
