class Pages extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.title = this.getAttribute('title')
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML = /* html */`
    <style>
    .pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: white;
      position: absolute;
      bottom: 0.5rem;
      left: 3.9rem;
      width: 38.5%;
      border-radius: 1rem;
      border: 10px solid darkgreen;
    }

    .pagination svg {
      width: 2.4rem;
      fill: darkgreen;
    }

    .pagination button {
      border: none;
      background: none;
      color: darkgreen;
      font-weight: bold;
      width: 100%;
      height: 2.5rem;
      font-size: 1.5rem;
    }

    .pagination button:not(:disabled):not(.current-page):hover {
      animation: none;
      background-color: darkgreen;
      color: white;
      cursor: pointer;
    }

    .pagination button:hover:not(:disabled) svg {
      fill: white;
    }

    button.current-page {
      background-color: #4dd0fa;
    }

    button.current-page:hover {
      background-color: #4dd0fa;
      color: darkgreen;
    }
  </style>
      <div class="pagination">
      <button class="first-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M7,12L12,17V14H16V10H12V7L7,12Z" />
        </svg>
      </button>
      <button class="current-page">1</button>
      <button>2</button>
      <button>3</button>
      <button disabled>···</button>
      <button>10</button>
      <button class="last-page">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12M17,12L12,7V10H8V14H12V17L17,12Z" />
        </svg>
      </button>
  </div>
  

     `
  }
}

customElements.define('pages-component', Pages)
