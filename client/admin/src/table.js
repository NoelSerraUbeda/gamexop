class Table extends HTMLElement {
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
          * {
            margin: 0;
            padding: 0;
            color: hsl(0, 0%, 100%);
          
          }

          button {
            background: transparent;
            border: none;
            cursor: pointer;
          }

          ul {
            list-style: none;
          }

          li {
            text-shadow: 1px 1px 2px black;  
          }
          
          .container {
            display:flex;
            flex-direction:column;
            justify-content:start;
            align-items:center;
            height:46.5rem;
          }

          .crud-table {
            position:relative;
          }

          .filter {
            align-items: center;
            background-color: white;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items:start;
            padding: 1.2rem 1.5rem;
            border-radius:1rem;
            border:10px solid darkgreen;
            width:100%; 
          }

          .filter-button button  {
            width: 3rem;
            transition: transform 0.3s ease;
          }

          .filter-button button:hover{
            transform: scale(1.05); 
          }

          .filter-button button svg path {
            fill: green;
          }

          .filter-button button:hover svg path {
            fill: #4DD0FA;
          }

          .table-component {
            display: flex;
            flex: 1;
            flex-direction: column;
            gap: 1rem;
          }

          .table-buttons {
            display: flex;
            gap: 0.5rem;
            justify-content: flex-end;
            position:absolute;
            right:0.8rem;
            top:0.8rem;            
          }

          .edit-button button,
          .delete-button button {
            background-color:lightgreen;
            border-radius:1rem;

          }

          .edit-button button svg,
          .delete-button button svg {
            width: 2rem;
            height:2rem;
            padding:0.4rem;
            transition: transform 0.3s ease;
          }

          .edit-button button,
          .delete-button button {
            fill: white;
          }

          .delete-button svg:hover {
            transform: scale(1.2); 
            fill:red;
          }

          .edit-button svg:hover {
            transform: scale(1.2); 
            fill:orange;
          }

          .table-data {
            background-color: green;
            padding: 1.5rem;
            font-size:20px;
            border-radius:1rem;
            border:6px solid darkgreen;
            margin-bottom:1rem;
            font-weight:bolder;
          }

          .table-data ul {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .table-data ul li span {
            color:lightgreen;
            text-shadow: none;  
          }

          .table-component {
            width: 40rem;
            overflow: auto; 
            padding: 1rem;
            scrollbar-width: none; 
            -ms-overflow-style: none; 
            padding-top:1rem;
            border-left:10px solid darkgreen;
            border-bottom:10px solid darkgreen;
            border-right:10px solid darkgreen;
            border-bottom-left-radius:1rem;
            border-bottom-right-radius:1rem;
            background-color:lightgreen;
          }

          .table-component::-webkit-scrollbar {
            display: none; 
          }

        </style>
    <div class="container">
      <section class="filter">
        <div class="filter-button">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12V19.88C12.04 20.18 11.94 20.5 11.71 20.71C11.32 21.1 10.69 21.1 10.3 20.71L8.29 18.7C8.06 18.47 7.96 18.16 8 17.87V12H7.97L2.21 4.62C1.87 4.19 1.95 3.56 2.38 3.22C2.57 3.08 2.78 3 3 3H17C17.22 3 17.43 3.08 17.62 3.22C18.05 3.56 18.13 4.19 17.79 4.62L12.03 12H12M15 17H18V14H20V17H23V19H20V22H18V19H15V17Z" /></svg>
            </button>
        </div>
      </section>

      <section class="table-component">
        <article class="crud-table">
          <div class="table-buttons">
              <div class="edit-button">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" /></svg>
              </button>
              </div>
              <div class="delete-button">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
              </button>
              </div>
          </div>
          <div class="table-data">
              <ul>
                <li><span>Nombre: </span>¿Qué es Gamexop?</li>
                <li><span>Fecha de creación: </span>24-02-02 11:54</li>
                <li><span>Fecha de actualización: </span>24-02-02 11:54</li>
              </ul>
          </div>
        </article>
      </section>
    </div>
    `
    const filterButton = this.shadow.querySelector('.filter-button')

    filterButton?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('showFilterModal', {
      }))
    })

    const tableSection = this.shadow.querySelector('.table-component')
    tableSection?.addEventListener('click', async (event) => {
      if (event.target.closest('.edit-button')) {
        alert('editar')
      }

      if (event.target.closest('.delete-button')) {
        document.dispatchEvent(new CustomEvent('showDeleteModal', {
        }))
      }
    })
  }
}

customElements.define('table-component', Table)
