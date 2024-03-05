class Pages extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
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
        <path d="M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z"/>
      </svg>
    </button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" />
      </svg>
    </button>
    <button class="current-page">1</button>
    <button>2</button>
    <button>3</button>
    <button>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M8.6,16.6L13.2,12L8.6,7.4L10,6L16,12L10,18L8.6,16.6Z" />
      </svg>
    </button>
    <button class="last-page">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z"/>
      </svg>
    </button>
  </div>
  `
  }
}

customElements.define('pages-component', Pages)
