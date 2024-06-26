class Menu extends HTMLElement {
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
      .top-bar {
        z-index: 2;
        position: relative;
      }

      .open {
        background-color: lightgreen;
        height: 100vh;
        top: -100vh; 
        display:flex;
        opacity:0;
        justify-content: center;
        left: 0;
        margin: 0;
        overflow: hidden;
        position: fixed;
        transition: top 0.5s, opacity 0.5s;
        width: 100%;
        z-index: 0;
        box-sizing: border-box;
      }

      .open-active {
        opacity:1;
        display: flex;
        position: fixed;
        height: 100vh;
        justify-content: center;
        padding-top: 2rem;
        box-sizing: border-box;
        z-index: 998;
        top: 0; 
      }

      .menu-form {
        align-items: center;
        display: flex;
        flex-direction: column;
        width: 80%;
        z-index:999;
      }

      .menu-form-title {
        margin-bottom: 3rem;
      }

      .tab-content{
        display:none;
      }

      .display {
        display: block;
      }

      .top-bar-active {
        z-index: 999;
      }
      .menu-icon {
        position: relative;
        background: none;
        cursor: pointer;
        color: inherit;
        display: block;
        font: inherit;
        border: none;
        padding: 5px;
        transition: transform 0.5s ease;
      }

      .menu-icon:hover{
        transform:scale(1.1)
      }

      .bar {
        background-color: darkgreen;
        transition: 0.8s;
        margin: 6px 0;
        height: 5px;
        width: 50px;
        z-index:999;
      }

      .menu-icon.opened .bar:nth-child(1) {
        transform: rotate(-405deg) translate(-7px, 8px);
      }

      .menu-icon.opened .bar:nth-child(2) {
        width:0;
        opacity: 0;
      }

      .menu-icon.opened .bar:nth-child(3) {
        transform: rotate(405deg) translate(-7px, -8px);
      }
    </style>

    <nav class="top-bar">
      <button class="menu-icon">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </button>
    </nav>
    <div class="open">
      <section class="menu-form">
      
      </section>
    </div>
    `
    const menu = this.shadow.querySelector('.open')
    const boton = this.shadow.querySelector('.top-bar')
    const svg = this.shadow.querySelector('.menu-icon')

    boton?.addEventListener('click', () => {
      menu.classList.toggle('open-active')
      boton.classList.toggle('top-bar-active')
      svg.classList.toggle('opened')
    })
  }
}

customElements.define('menu-component', Menu)
