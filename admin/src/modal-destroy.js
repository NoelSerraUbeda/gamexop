class Destroy extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    document.addEventListener('show-destroy-modal', event => {
      this.openModal()
    })

    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
            <div class="delete-area">
                <div class="delete-area-form">
                    <label>¿Eliminar este registro?</label>
                    <div class="delete-options">
                        <button class="accept"><span>Si</span></button>
                        <button class="close"><span>No</span></button>
                    </div>
                </div>
            </div>
            
            <style>
                .delete-area {
                    transition: visibility 0s, opacity 0.3s ease;
                    background-color: hsla(0, 0%, 0%, 0.7);
                    justify-content: center;
                    align-items: center;
                    visibility: hidden;
                    position: fixed;
                    display: flex;
                    height: 100%;
                    width: 100%;
                    z-index: 10;
                    opacity: 0;
                    left: 0;
                    top: 0;
                }

                .delete-area-form {
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
                    gap: 15px;
                }

                .delete-area.active {
                    visibility: visible;
                    opacity: 1;
                }

                .delete-area-form {
                    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
                    flex-direction: column;
                    height: 10rem;
                    display: flex;
                    width: 25rem;
                    z-index: 12;
                }

                .delete-area-form label {
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                    color: hsl(0, 0%, 96%);
                    font-weight: bolder;
                    text-indent: 10px;
                    font-size: 22px;
                }

                .delete-options {
                    justify-content: space-around;
                    display: flex;
                    width: 75%;
                }

                .delete-options button {
                    font-size: 24px;
                    height: 2.5rem;
                    width: 8rem;
                }

                .delete-options button.close::before {
                    background-color: hsl(0, 68%, 50%);
                }

                .delete-options button.accept::before {
                    background-color: hsl(118, 68%, 50%);
                }

                .delete-options button:hover {
                    transition: transform 0.3s ease, color 0.3s ease;
                    transform: scale(1.05);
                }

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

                button:hover {
                    transition: transform 0.3s ease, color 0.3s ease;
                    transform: scale(1.05);
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

                .acept::before {
                    background-color: hsl(118, 68%, 50%);
                }

                button:hover::before {
                    left: 0;
                }

                span {
                    color: hsl(0, 0%, 100%);
                }
  
            </style>

        `
    const close = this.shadow.querySelector('.delete-options .close')

    close.addEventListener('click', () => {
      this.closeModal()
    })
  }

  openModal () {
    const deleteModal = this.shadow.querySelector('.delete-area')
    deleteModal.classList.toggle('active')
  }

  closeModal () {
    const deleteModal = this.shadow.querySelector('.delete-area')
    deleteModal.classList.toggle('active')
  }
}

customElements.define('destroy-component', Destroy)
