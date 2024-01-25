class Filter extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('show-filter-modal', event => {
      this.openModal()
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
      <div class="topbar-filter-form">
          <div class="filter-menu">
              <label>Menu de filtrado</label>
              <div class="filter-input">
                  <label>Name:</label>
                  <input type="text">
              </div>
              <div class="filter-input">
                  <label>Email:</label>
                  <input type="text">
              </div>
              <div class="filter-input buttons">
                  <button class="accept"><span>Filtrar</span></button>
                  <button class="close"><span>Cancelar</span></button>
              </div>
          </div>
      </div>
      
      <style>
        button {
            box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
            transition: background-color 0.2s ease-in-out;
            background-color: hsl(216, 100%, 50%);
            border-radius: 10px;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            border: none;
        }

        .topbar-filter-form {
            transition: visibility 0s, opacity 0.3s ease;
            background-color: hsla(0, 0%, 0%, 0.7);
            justify-content: center;
            align-items: center;
            visibility: hidden;
            position: fixed;
            display: flex;
            height: 100%;
            width: 100%;
            z-index: 33;
            opacity: 0;
            left: 0;
            top: 0;
        }

        .topbar-filter-form.active {
            visibility: visible;
            opacity: 1;
        }

        .topbar-filter-form form {
            box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
            flex-direction: column;
            font-display: flex;
            margin-top: 10%;
            width: 30.1%;
            height: 40%;
            z-index: 33;
        }

        .topbar-filter-form label {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            color: hsl(0, 0%, 96%);
            font-weight: bolder;
            text-indent: 10px;
            font-size: 32px;
        }

        .filter-input {
            flex-direction: column;
            margin-bottom: 1rem;
            display: flex;
            width: 80%;
        }

        .filter-input input {
            width: 100%;
        }

        .filter-input.buttons {
            justify-content: space-around;
            flex-direction: row;
            align-items: center;
            display: flex;
            width: 100%;
        }

        .filter-input.buttons button {
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            font-size: 1.8rem;
            padding: 0.2rem;
            height: 100%;
            width: 40%;
        }

        .accept span {
            color: hsl(0, 0%, 100%);
        }

        .close span {
            color: hsl(0, 0%, 100%);
        }

        .filter-menu {
            box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
            background: linear-gradient(to left, hsl(211, 100%, 50%), hsl(195, 100%, 50%));
            border: 5px solid hsl(216, 100%, 50%);
            justify-content: center;
            border-top-width: 25px;
            padding-bottom: 20px;
            border-radius: 15px;
            align-items: center;
            padding-top: 10px;
            margin-top: 20px;
            flex-wrap: wrap;
            display: flex;
            width: 30rem;
            gap: 15px;
        }

        .filter-menu input {
            background-image: linear-gradient(to bottom, hsl(0, 0%, 100%), hsl(39, 67%, 92%));
            border: 5px solid hsl(39, 67%, 92%);
            border-radius: 15px;
            text-align: center;
            font-size: 30px;
            height: 2rem;
        }

        button::before {
            background-color: hsl(207, 44%, 49%);
            transition: left 0.2s ease-in-out;
            position: absolute;
            height: 100%;
            content: '';
            left: -100%;
            width: 100%;
            z-index: -1;
            top: 0;
        }

        .close::before {
            background-color: hsl(0, 68%, 50%);
        }

        .accept::before {
            background-color: hsl(118, 68%, 50%);
        }

        button:hover {
            transition: transform 0.3s ease, color 0.3s ease;
            transform: scale(1.05);
        }
        button:hover::before {
            left: 0;
        }
      </style>
    `
    const close = this.shadow.querySelector('.filter-input .close')

    close.addEventListener('click', () => {
      this.closeModal()
    })
  }

  openModal () {
    const filterModal = this.shadow.querySelector('.topbar-filter-form')
    filterModal.classList.toggle('active')
  }

  closeModal () {
    const filterModal = this.shadow.querySelector('.topbar-filter-form')
    filterModal.classList.toggle('active')
  }
}

customElements.define('filter-component', Filter)
