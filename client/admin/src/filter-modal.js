class FilterModal extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    const background = document.querySelector('.background-block')

    document.addEventListener('showFilterModal', event => {
      background.classList.add('background-block-active')
      this.openModal()
    })
    this.render()
  }

  render () {
    this.shadow.innerHTML =
            /* html */
            `
            <style>
              h1,
              h2,
              h3,
              h4,
              h5,
              h6 {
                color: hsl(0, 0%, 100%);
                font-family: Arial;
                margin:0;
              }

              input,
              label,
              select,
              textarea,
              li,
              span,
              p {
                color: hsl(0, 0%, 100%);
                font-family: Arial;
              }

              .filter-modal {
                display: none;
              }

              .filter-modal-active {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 3;
              }

              .filter-modal-form {
                border: solid 5px;
                border-color: darkgreen;
                background-color: lightgreen;
                padding: 4rem 2rem;
                border radius:1rem;
                width:30%;
                border-radius:1rem;
              }

              .filter-inside-buttons button {
                cursor:pointer;
                transition: transform 0.3s ease;
                border:none;
                border-radius:1rem; 
              }

              .filter-inside-buttons button:hover{
                transform: scale(1.1);
              }

              .filter-modal-form-title {
                display: flex;
                justify-content: center;
                margin-bottom: 2rem;
                font-size:28px;
              }

              .filter-inside-buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                gap: 2rem;
              }

              button {
                transition: transform 0.3s ease;
              }

              button :hover{
                transform: scale(1.1);
              }

              .filter-inside-buttons-accept {
                font-size:24px;
                background-color: #02A8B1;
              }

              .filter-inside-buttons-decline {
                background-color: #D74242;
                font-size:24px;
              }

              .form-row {
                display: flex;
                gap: 2rem;
              }

              .form-element {
                display: flex;
                flex: 1;
                flex-direction: column;
                gap: 0.5rem;
                margin-bottom: 1rem;
              }

              .form-element-label label {
                font-weight: 700;
                font-size:26px;
              }

              .form-element-input * {
              background-color: green;
              border: none;
              box-sizing: border-box;
              font-size: 1rem;
              height: 2rem;
              outline: transparent;
              padding: 0.5rem;
              width: 100%;
              }

              .form-element-input textarea {
              height: 30vh;
              resize: none;
              }

              .table-buttons {
              background-color: green;
              display: flex;
              gap: 0.5rem;
              justify-content: flex-end;
              }

              .modal-delete-box-label {
                padding: 2rem 6rem;
              }

              .modal-delete-box-buttons {
              display: flex;
              width: 100%;
              gap: 2rem;
              }

              .modal-buttons{
              display: flex;
              justify-content: center;
              padding: 0.7rem;
              width: 100%;
              color: white;
              }

              .modal-delete-box-buttons-accept {
              background-color: #02A8B1;
              }

              .modal-delete-box-buttons-decline {
              background-color: #D74242;
              }
            </style>
      
            <section class="filter-modal">
              <div class="filter-modal-form">
                <label class="filter-modal-form-title" for="">
                  <h2>Filter</h2>
                </label>

                <div class="form-row">
                    <div class="form-element">
                    <div class="form-element-label">
                      <label for="email">Name</label>
                    </div>
                    <div class="form-element-input">
                      <input type="email">
                    </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-element">
                    <div class="form-element-label">
                      <label for="email">Mail</label>
                    </div>
                    <div class="form-element-input">
                      <input type="email">
                    </div>
                    </div>
                </div>
                
                <section class="filter-inside-buttons">
                  <button class="filter-inside-buttons-accept modal-buttons">Filtrar</button>
                  <button class="filter-inside-buttons-decline modal-buttons">Cancelar</button>
                </section>
              
              </div>
            </section>

            `
    // modal
    const buttonAccept = this.shadow.querySelector('.filter-inside-buttons-accept')
    const buttonDecline = this.shadow.querySelector('.filter-inside-buttons-decline')

    buttonAccept?.addEventListener('click', () => {
      this.closeModal()
    })

    buttonDecline?.addEventListener('click', () => {
      this.closeModal()
    })
  }

  openModal () {
    const filterMenu = this.shadow.querySelector('.filter-modal')
    filterMenu.classList.add('filter-modal-active')
  }

  closeModal () {
    // const background = this.shadow.querySelector(".background-block");
    const filterMenu = this.shadow.querySelector('.filter-modal')
    const background = document.querySelector('.background-block')

    background.classList.remove('background-block-active')
    filterMenu.classList.remove('filter-modal-active')
  }
}

customElements.define('filter-modal', FilterModal)
