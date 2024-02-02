class Form extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = /* html */`
    <style>
      button {
        background: transparent;
        border: none;
        cursor: pointer;
      }

      input,
      label,
      select,
      textarea,
      li,
      span,
      div,
      p {
        color: hsl(0, 0%, 100%);
        font-family: Arial;
        font-weight:bolder;
        border-radius:1rem;
      }

      textarea {
        height:15rem;
      }

      input {
        border-radius:0.5rem;
      }

      label {
        font-size: 28px;
        text-shadow: 1px 1px 2px black;      
      }

      .form {
        flex: 2;
        background-color: lightgreen;
        padding: 1rem 1rem 0.5rem 1rem;
        border-radius: 1rem;
        border: 10px solid darkgreen;
        overflow: auto;
        height: 44rem;
        width: 110%;
        margin-bottom: 10rem;
        scrollbar-width: none; 
        -ms-overflow-style: none; 
      }

      .form::-webkit-scrollbar {
          display: none; 
        }

      .form-top-bar{
        display: flex;
        justify-content: center;
        height: 4rem;
        width: 100%;
        margin-bottom: 2rem;
      }

      .tabs{
        display: flex;
        gap:0.5rem;
        height: 100%;
        width: 100%;
        background-color:lightgreen;
      }

      .tab{
        transition: transform 0.3s ease;
        background-color: green;
        padding: 0.5rem 1.5rem;
        align-items: center;
        cursor: pointer;
        display: flex;
        font-size:20px;
      }

      .tab:hover{
        background-color: darkgreen;
        transform: scale(1.05);
      }

      .tab button{
        color: white;
        pointer-events: none;
        cursor: not-allowed;
      }

      .tab.active button{
        color: white;
      }

      .tab.active{
        background-color:#4DD0FA;
        color: white;
      }

      .tab-contents{
        width: 100%;
      }

      .tab-content.active{
        width: 100%;
        display: block;
      }

      .tab-content{
        display: none;
      }

      .form-buttons {
        display: flex;
        justify-content: flex-end;
        gap: 0.5rem;
        padding: 0.5rem;
        padding-right: 0.5rem;
      }

      .create-button button svg,
      .store-button button svg {
        width: 4rem;
        background-color:green;
        padding:0.5rem;
        border-radius:1rem;
      }

      .create-button button,
      .store-button button {
        fill: white;
        transition: transform 0.3s ease;
      }

      .create-button button:hover {
        transform: scale(1.05);
        fill:red;
      }

      .store-button button:hover{
        transform: scale(1.05);
        fill:#4DD0FA;
      }

      .form-row{
        display: flex;
        gap: 1rem;
      }

      .form-element {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
        width: 100%;
      }

      .form-element-input * {
        background-color: darkgreen;
        border: none;
        box-sizing: border-box;
        font-size: 1.5rem;
        outline: transparent;
        padding:0.5rem;
        width: 100%;
        text-indent:0.3rem;
      }

      input:focus {
        outline: 2px solid #4DD0FA; 
      }

      textarea:focus {
        outline: 2px solid #4DD0FA; 
      }

      .language-contents{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-top: 5rem;
      }

      .form-language-bar{
        background-color: white;
        width: 100%;
        height: 3rem;
        margin: 1rem 0;
      }

      input[type=number]::-webkit-inner-spin-button,
      input[type=number]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
      }
      input[type=number] {
          -moz-appearance: textfield;
      }
    </style>
  
    <div class="form">
      <div class="form-top-bar">
        <div class="tabs">
          <div class="tab  active" data-tab="general">General</div>
          <div class="tab " data-tab="images">Images</div>
        </div>
        <div class="form-buttons">
          <div class="create-button"  data-endpoint="">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" /></svg>
            </button>
          </div>
          <div class="store-button" data-endpoint="">
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 11.7V7L17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H11.7C11.4 20.3 11.2 19.6 11.1 18.8C9.9 18.4 9 17.3 9 16C9 14.3 10.3 13 12 13C12.3 13 12.6 13.1 12.9 13.2C14.2 11.8 16 11 18 11C19.1 11 20.1 11.2 21 11.7M15 9H5V5H15V9M21.7 18.6V17.6L22.8 16.8C22.9 16.7 23 16.6 22.9 16.5L21.9 14.8C21.9 14.7 21.7 14.7 21.6 14.7L20.4 15.2C20.1 15 19.8 14.8 19.5 14.7L19.3 13.4C19.3 13.3 19.2 13.2 19.1 13.2H17.1C16.9 13.2 16.8 13.3 16.8 13.4L16.6 14.7C16.3 14.9 16.1 15 15.8 15.2L14.6 14.7C14.5 14.7 14.4 14.7 14.3 14.8L13.3 16.5C13.3 16.6 13.3 16.7 13.4 16.8L14.5 17.6V18.6L13.4 19.4C13.3 19.5 13.2 19.6 13.3 19.7L14.3 21.4C14.4 21.5 14.5 21.5 14.6 21.5L15.8 21C16 21.2 16.3 21.4 16.6 21.5L16.8 22.8C16.9 22.9 17 23 17.1 23H19.1C19.2 23 19.3 22.9 19.3 22.8L19.5 21.5C19.8 21.3 20 21.2 20.3 21L21.5 21.4C21.6 21.4 21.7 21.4 21.8 21.3L22.8 19.6C22.9 19.5 22.9 19.4 22.8 19.4L21.7 18.6M18 19.5C17.2 19.5 16.5 18.8 16.5 18S17.2 16.5 18 16.5 19.5 17.2 19.5 18 18.8 19.5 18 19.5Z" /></svg>          </button>
          </div>
        </div>
      </div>
      <form class="admin-form">
        <input type="hidden" name="id" value="">
        <div class="tab-contents ">
          <div class="tab-content active" data-tab="general">
            <div class="form-row">
              <div class="form-element">
                <div class="form-element-label">
                  <label for="title">Name</label>
                </div>
                <div class="form-element-input">
                  <input type="text" name="name" value="">
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label for="address">Email</label>
                </div>
                <div class="form-element-input">
                  <input type="email" name="email" value="">
                </div>
              </div>
            </div>

            <div class="form-row">
              <div class="form-element">
                <div class="form-element-label">
                  <label for="title">Password</label>
                </div>
                <div class="form-element-input">
                  <input type="password" name="password" value="">
                </div>
              </div>
              <div class="form-element">
                <div class="form-element-label">
                  <label for="address">Repeat Password</label>
                </div>
                <div class="form-element-input">
                  <input type="password" name="repeat" value="">
                </div>
              </div>
            </div>

          <div class="form-language-bar">
            <div class="tabs">
                <div class="tab active" data-tab="es">ES</div>
                <div class="tab" data-tab="en">EN</div>
            </div>
          </div>
    
          <div class="tab-contents">
            <div class="tab-content active" data-tab="es">
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="title">Titulo</label>
                  </div>
                  <div class="form-element-input">
                    <input type="text" name="" value="">
                  </div>
                </div>
              </div>

              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="description">Descripción</label>
                  </div>
                  <div class="form-element-input">
                    <textarea name="" type="textarea" class="event-description" data-onlyletters="true"></textarea>
                  </div>
                </div>
              </div>
            </div>

            <div class="tab-content" data-tab="en">
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="title">
                      Name
                    </label>
                  </div>
                  <div class="form-element-input">
                    <input type="text" name="" value="">
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-element">
                  <div class="form-element-label">
                    <label for="description">Description</label>
                  </div>
                  <div class="form-element-input">
                    <textarea name="" type="textarea" class="event-description" data-onlyletters="true"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

          <!-- image Gallery -->
      <div class="tab-content" data-tab="images">
        <upload-image-component> </upload-image-component>
      </div>
    </form>
`
    const buttonSave = this.shadow.querySelector('.store-button')

    buttonSave?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('notification', {

      }))
    })

    const clean = this.shadow.querySelector('.create-button')
    clean?.addEventListener('click', () => {
      const inputFields = this.shadow.querySelectorAll('input, textarea')
      inputFields.forEach(input => {
        input.value = ''
      })
    })

    const main = this.shadow.querySelector('.form')
    main?.addEventListener('click', (event) => {
      if (event.target.closest('.tab')) {
        if (event.target.closest('.tab').classList.contains('active')) {
          return
        }

        const tabClicked = event.target.closest('.tab')
        const tabActive = tabClicked.parentElement.querySelector('.active')

        console.log(tabClicked)
        tabClicked.classList.add('active')
        tabActive.classList.remove('active')

        this.shadow.querySelector(`.tab-content.active[data-tab="${tabActive.dataset.tab}"]`).classList.remove('active')
        this.shadow.querySelector(`.tab-content[data-tab="${tabClicked.dataset.tab}"]`).classList.add('active')
      }
    })
  }
}

customElements.define('form-component', Form)
