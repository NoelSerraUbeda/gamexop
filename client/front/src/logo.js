class Logo extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.loadData().then(() => this.render())
  }

  async loadData () {
    this.data = {
      title: '',
      image: {
        url: '/Logo.svg',
        alt: 'Logo de GameXop'
      }
    }
  }

  render () {
    this.shadow.innerHTML =
    /* html */`
    <style>
      a{
        text-decoration: none;
      }
      
      .logo{
        align-items: center;
        display: flex;
        gap: 1rem;
      }

      .logo img{
        height: 7rem;
        width: 7rem;
      }

      .logo h1{
        color: hsl(0, 0%, 100%);
        font-family: "Consolas", monospace;
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
      }
    </style>

    <a href="/">
      <div class="logo">
        <img src="${this.data.image.url}" alt="${this.data.image.alt}" />
        <h1>${this.data.title}</h1>
      </div>
    </a>
    `

    this.shadow.querySelector('a').addEventListener('click', (event) => {
      event.preventDefault()
      window.history.pushState({}, '', '/')
      window.dispatchEvent(new PopStateEvent('popstate'))
    })
  }
}

customElements.define('logo-component', Logo)
