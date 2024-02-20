class ModalDestroy extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    const background = document.querySelector('.background-modal')

    document.addEventListener('deleteModal', event => {
      background.classList.add('background-modal-active')
      this.openModal()
    })
    this.render()
  }

  render () {
    this.shadow.innerHTML = /* html */`
    <style>
      h3{
        font-size:30px;
        margin:0;
        text-shadow: 1px 1px 2px black;
      }

      .modal-delete {
        display: none;
        color:white;
      }

      .modal-delete-active {
        position: fixed;
        z-index: 3;
        height: 100vh;
        width: 100%;
        top: 0;
        left: 0;
        justify-content: center;
        align-items: center;
        display: flex;
      }

      .modal-delete-box {
        border: solid 5px;
        border-color: darkgreen;
        background-color: lightgreen;
        padding: 2rem;
        border-radius:1rem;
      }

      .modal-delete-box-label {
        padding: 2rem 6rem;
      }

      .modal-delete-box-buttons {
        display: flex;
        width: 100%;
        gap: 2rem;
        border:none;
      }

      .modal-buttons{
        display: flex;
        justify-content: center;
        padding: 0.7rem;
        width: 100%;
        color:white;
        font-size:24px;
        cursor:pointer;
        transition: transform 0.3s ease; 
        border-radius:1rem; 
      }

      .modal-buttons:hover {
        transform: scale(1.1); 
      }


      .modal-delete-box-buttons-accept {
        border-radius:1rem; 
        border:none;
        background-color: #02A8B1;
      }

      .modal-delete-box-buttons-decline {
        border-radius:1rem; 
        border:none;
        background-color: #D74242;
      }
      
    </style>
    
    <section class="modal-delete">
        <div class="modal-delete-box">
            <div class="modal-delete-box-label">
                <h3>Eliminar este registro?</h3>
            </div>
            <div class="modal-delete-box-buttons">
                <button class="modal-delete-box-buttons-accept modal-buttons"> Aceptar </button>
                <button class="modal-delete-box-buttons-decline modal-buttons"> Cancelar </button>
            </div>
        </div>
    </section>
    `
    const acceptButton = this.shadow.querySelector('.modal-delete-box-buttons-accept')
    const cancelButton = this.shadow.querySelector('.modal-delete-box-buttons-decline')

    acceptButton?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('destroy'))
      this.closeModal()
    })

    cancelButton?.addEventListener('click', () => {
      this.closeModal()
    })
  }

  openModal () {
    const deleteModal = this.shadow.querySelector('.modal-delete')
    deleteModal.classList.add('modal-delete-active')
  }

  closeModal () {
    const deleteModal = this.shadow.querySelector('.modal-delete')
    const background = document.querySelector('.background-modal')
    background.classList.remove('background-modal-active')
    deleteModal.classList.remove('modal-delete-active')
  }
}

customElements.define('modal-destroy-component', ModalDestroy)
