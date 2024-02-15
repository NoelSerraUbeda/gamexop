class Title extends HTMLElement {
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
        .top-bar-title {
          display:flex;
          justify-content:center;
          align-items:center;
          background-color:green;
          width:100rem;
          height:5rem;
          border-radius:1rem;
          padding:0.5rem;
          gap:1rem;
        }

        svg {
          height:5rem;
          fill:white;
        }
        h1{
          color: hsl(0, 0%, 100%);
          margin: 0;
          padding: 0;
          flex:1;
        }
      </style>
  
    <div class="top-bar-title">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18,15H6L2,19V3A1,1 0 0,1 3,2H18A1,1 0 0,1 19,3V14A1,1 0 0,1 18,15M23,9V23L19,19H8A1,1 0 0,1 7,18V17H21V8H22A1,1 0 0,1 23,9M8.19,4C7.32,4 6.62,4.2 6.08,4.59C5.56,5 5.3,5.57 5.31,6.36L5.32,6.39H7.25C7.26,6.09 7.35,5.86 7.53,5.7C7.71,5.55 7.93,5.47 8.19,5.47C8.5,5.47 8.76,5.57 8.94,5.75C9.12,5.94 9.2,6.2 9.2,6.5C9.2,6.82 9.13,7.09 8.97,7.32C8.83,7.55 8.62,7.75 8.36,7.91C7.85,8.25 7.5,8.55 7.31,8.82C7.11,9.08 7,9.5 7,10H9C9,9.69 9.04,9.44 9.13,9.26C9.22,9.08 9.39,8.9 9.64,8.74C10.09,8.5 10.46,8.21 10.75,7.81C11.04,7.41 11.19,7 11.19,6.5C11.19,5.74 10.92,5.13 10.38,4.68C9.85,4.23 9.12,4 8.19,4M7,11V13H9V11H7M13,13H15V11H13V13M13,4V10H15V4H13Z" /></svg>        
      <h1>${this.title}</h1>
    </div>
     `
  }
}

customElements.define('title-component', Title)
