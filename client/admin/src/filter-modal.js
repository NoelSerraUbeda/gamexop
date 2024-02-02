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
    this.shadow.innerHTML = /* html */`
    <style>
      label {
        color: hsl(0, 0%, 100%);
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
        padding: 2rem 2rem;
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
        text-shadow: 1px 1px 2px black;
      }

      .form-element-input * {
        background-color: green;
        border: none;
        box-sizing: border-box;
        font-size: 1rem;
        outline: transparent;
        padding: 0.5rem;
        width: 100%;
        height:3rem;
        border-radius:1rem;
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
    const filterMenu = this.shadow.querySelector('.filter-modal')
    const background = document.querySelector('.background-block')

    background.classList.remove('background-block-active')
    filterMenu.classList.remove('filter-modal-active')
  }
}

customElements.define('filter-modal', FilterModal)
