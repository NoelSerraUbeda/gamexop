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
      bottom: 1rem;
      left: 3.9rem;
      width: 38.5%;
      border-radius: 1rem;
      border: 10px solid darkgreen;
    }

    .pagination svg {
      width: 20px;
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
    
    .pagination button svg {
      transition: transform 0.3s ease;
    }

    .pagination button:not(:disabled):not(.current-page):hover {
      text-decoration:underline;
      cursor: pointer;
    }

    .pagination button:hover:not(:disabled) svg {
      transform: scale(1.3); 
    }

    .pagination .last-page {
      transform: scaleX(-1);
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
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.852 54.4136C9.04933 52.2298 9.04934 46.7702 12.852 44.5864L80.444 5.76861C84.2467 3.58477 89 6.31457 89 10.6822V88.3178C89 92.6854 84.2467 95.4152 80.444 93.2314L12.852 54.4136Z"/>
            </svg>
        </button>
        <button class="current-page">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button disabled>···</button>
        <button>10</button>
        <button class="last-page" >
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.852 54.4136C9.04933 52.2298 9.04934 46.7702 12.852 44.5864L80.444 5.76861C84.2467 3.58477 89 6.31457 89 10.6822V88.3178C89 92.6854 84.2467 95.4152 80.444 93.2314L12.852 54.4136Z"/>
            </svg>
        </button>
    </div>
  `
  }
}

customElements.define('pages-component', Pages)
