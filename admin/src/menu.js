class Menu extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */`
        <style>
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
              background-color: white;
              transition: 0.8s;
              margin: 6px 0;
              height: 5px;
              width: 50px;
            }

            .menu-icon.active .bar:nth-child(1) {
              transform: rotate(-405deg) translate(-7px, 8px);
            }

            .menu-icon.active .bar:nth-child(2) {
              width: 0;
              background-color: hsl(240, 65%, 49%);
            }

            .menu-icon.active .bar:nth-child(3) {
              transform: rotate(405deg) translate(-7px, -8px);
            }

            .topnav-menu {
              background-image: linear-gradient(to bottom, hsl(0, 0%, 100%), hsl(39, 67%, 92%));
              border: 5px solid hsl(211, 100%, 50%);
              transition: height 0.5s, visibility 0.5s;
              border-radius: 25px;
              position: absolute;
              overflow: hidden;
              visibility: hidden;
              height: 0px;
              margin: 5px;
              width: 98%;
              left: 10px;
              top: 60px;
              z-index:-1;
            }

            .topnav-menu-content {
              justify-content: center;
              align-items: start;
              padding: 10px;
              display: flex;
              gap: 100px;
            }

            .topnav-menu.active {
              height: 90vh;
              visibility: visible;
            }

            .topnav-menu-content h4 {
              color: hsl(0, 0%, 96%);
            }

            @media only screen and (max-width: 1550px) {

              .topnav-menu {
                width: 97%;
              }

              @media only screen and (max-width: 1280px) {

                .topnav-menu {
                  width: 90%;
                }

                @media only screen and (max-width: 769px) {

                  .topnav-menu {
                    width: 0rem;
                  }
                } 
              }
            }
        </style>

        <nav>
            <button class="menu-icon">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </button>
        </nav>
        <div class="topnav-menu">
            <div class="topnav-menu-content">
            
            </div>
        </div>
      `
    const menuIcon = this.shadow.querySelector('.menu-icon')
    const topnavMenu = this.shadow.querySelector('.topnav-menu')

    menuIcon?.addEventListener('click', function () {
      topnavMenu.classList.toggle('active')
      menuIcon.classList.toggle('active')
    })
  }
}

customElements.define('menu-component', Menu)
