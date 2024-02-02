class SaveNotification extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.notificationMessage = this.getAttribute('message')
  }

  connectedCallback () {
    document.addEventListener('notification', () => {
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
        background-color: green;
        border:solid 10px darkgreen;
        color: #fff;
        padding: 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        font-size: 36px;
        padding: 1rem;
        border-radius: 1rem;
        animation: slideFromRight 2.5s forwards;
      }

      .notification-container.show {
        display: block;
      }

      @keyframes slideFromRight {
        0% {
          transform: translateX(110%);
        }
        10% {
          transform: translateX(0);
        }
        20% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(0);
        }
        40% {
          transform: translateX(0);
        }
        50% {
          transform: translateX(0);
        }
        51% {
          transform: translateX(0);
        }
        52% {
          transform: translateX(0);
        }
        53% {
          transform: translateX(0);
        }
        54% {
          transform: translateX(0);
        }
        60% {
          transform: translateX(0);
        }
        70% {
          transform: translateX(0);
        }
        80% {
          transform: translateX(0);
        }
        90% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(110%);
        }
      }
    </style>

  <div class="notification-container">
    <p>Todos los datos son correctos</p>
  </div>
    `
  }
}

customElements.define('save-notification-component', SaveNotification)
