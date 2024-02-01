class SaveNotification extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.notificationMessage = this.getAttribute('message')
  }

  connectedCallback () {
    document.addEventListener('save-notification', () => {
      this.showNotification()
    })

    this.render()
  }

  showNotification () {
    this.shadow.querySelector('.notification-container').classList.add('show')
    setTimeout(() => {
      this.hideNotification()
    }, 5000)
  }

  hideNotification () {
    this.shadow.querySelector('.notification-container').classList.remove('show')
  }

  render () {
    this.shadow.innerHTML = /* html */ `
        <style>
          .notification-container {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: #090;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            transition: display 0.3s ease-in-out;
            font-size:45px;
            padding:1rem;
            border-radius:1rem;
          }
  
          .notification-container.show {
            display: block;
          }
        </style>
  
        <div class="notification-container">
          <p>Todos los datos son correctos</p>
        </div>
      `
      }
}

customElements.define('save-notification-component', SaveNotification)
