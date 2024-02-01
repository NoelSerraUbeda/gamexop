class Form extends HTMLElement {
  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
      /* html */
      `
        <style>
         * {
  margin: 0;
  padding: 0;
}

section {
  margin: 0;
  padding: 0;
}

.none {
  display: none;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
}


a {
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  font-family: Verdana, Geneva, Tahoma, sans-serif;
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
  font-size: 22px;
  text-shadow: 
    1px 1px 0 #000, 
    -1px -1px 0 #000, 
    0.5px -1px 0 #000, 
    -1px 0px 0 #000; 
}


.form {
    flex: 2;
    background-color: lightgreen;
    padding: 1rem 1rem 0.5rem 1rem;
    border-radius: 1rem;
    border: 10px solid darkgreen;
    overflow: auto; /* Utiliza 'auto' para mostrar la barra de desplazamiento solo cuando sea necesario */
    height: 43rem;
    width: 100%;
    margin-bottom: 10rem;
    scrollbar-width: none; /* Oculta la barra de desplazamiento en Firefox */
    -ms-overflow-style: none; 
}

.form::-webkit-scrollbar {
    display: none; /* Oculta la barra de desplazamiento en navegadores webkit (Chrome, Safari, etc.) */
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
    height: 100%;
    width: 100%;
    background-color:lightgreen;
}

.tab{
    background-color: green;
    display: flex;
    align-items: center;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
}

.tab:hover{
  background-color: darkgreen;
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
    background-color: blue;
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

.create-button button:hover,
.store-button button:hover{
  transform: scale(1.05);
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
  padding: 0.3rem;
  width: 100%;
  text-indent:0.3rem;
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eraser</title><path d="M16.24,3.56L21.19,8.5C21.97,9.29 21.97,10.55 21.19,11.34L12,20.53C10.44,22.09 7.91,22.09 6.34,20.53L2.81,17C2.03,16.21 2.03,14.95 2.81,14.16L13.41,3.56C14.2,2.78 15.46,2.78 16.24,3.56M4.22,15.58L7.76,19.11C8.54,19.9 9.8,19.9 10.59,19.11L14.12,15.58L9.17,10.63L4.22,15.58Z" /></svg>
        </button>
      </div>
      <div class="store-button" data-endpoint="">
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
        </button>
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
              <label for="address">Location</label>
            </div>
            <div class="form-element-input">
              <input type="text" name="address" value="">
            </div>
          </div>
        </div>

        <div class="form-row">
        <div class="form-element">
          <div class="form-element-label">
            <label for="price">Price</label>
          </div>
          <div class="form-element-input">
            <input type="number" name="price" value="">
          </div>
        </div>
        <div class="form-element">
          <div class="form-element-label">
            <label for="town">Population</label>
          </div>
          <div class="form-element-input">
            <select id="town_id" name="town_id">
              <option value=""></option>

                  <option value=""></option>

            </select>
          </div>
        </div>
      </div>
  
        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="date">Start Date</label>
            </div>
            <div class="form-element-input">
            <input type="date" name="start_date" value="">
            </div>
          </div>
          <div class="form-element">
            <div class="form-element-label">
              <label for="date">End Date</label>
            </div>
            <div class="form-element-input">
              <input type="date" name="end_date" value="">
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-element">
            <div class="form-element-label">
              <label for="start_time">Time Start</label>
            </div>
            <div class="form-element-input">
              <input type="time" name="start_time" value="">
            </div>
          </div>
          <div class="form-element">
            <div class="form-element-label">
              <label for="start_time">Time End</label>
            </div>
            <div class="form-element-input">
              <input type="time" name="end_time" value="">
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
                    <label for="title">Name</label>
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
                    <label for="description">
                      Descripcion
                    </label>
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
    </div>
  </form>
</div>

        `

    const buttonSave = this.shadow.querySelector('.store-button')

    buttonSave?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('save-notification', {

      }))
    })

    // boton de clean
    const buttonBroom = this.shadow.querySelector('.create-button')

    buttonBroom?.addEventListener('click', () => {

    })

    const main = this.shadow.querySelector('.form')
    // console.log(main)
    main?.addEventListener('click', (event) => {
      // event.preventDefault()

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
