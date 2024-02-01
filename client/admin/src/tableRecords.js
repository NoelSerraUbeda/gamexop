class TableRecords extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
            /* html */
            `
        <style>

* {
  margin: 0;
  padding: 0;
}

section {
  margin: 0;

}

.none {
  display: none;
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: hsl(0, 0%, 100%);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}


input,
label,
select,
textarea,
li,
span,
p {
  color: hsl(0, 0%, 100%);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.table-record {
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
}

.filter-button button svg {
  width: 3rem;
}

.filter-button button svg path {
  fill: green;
}

.filter-button button:hover svg path {
  fill: lightgreen;
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
  right:0.5rem;
  top:0.5rem;
}

.edit-button button svg,
.delete-button button svg {
  width: 3rem;
}

.edit-button button svg path,
.delete-button button svg path {
  fill: white;
  transition: transform 0.3s ease;
}

.edit-button button:hover svg path,
.delete-button button:hover svg path {
  transform: scale(1.05); 
  fill:darkgreen;
}


.table-data {
  background-color: lightgreen;
  padding: 2.5rem;
  font-size:24px;
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
  color:darkgreen;
}

.table-data ul li span::after {
  content: ":";
  margin-right: 0.5rem;
}

.table-component {
    height: 43rem;
    width: 40rem;
    overflow: auto; /* Utiliza 'auto' para mostrar la barra de desplazamiento solo cuando sea necesario */
    padding: 1rem;
    scrollbar-width: none; /* Oculta la barra de desplazamiento en Firefox */
    -ms-overflow-style: none; /* Oculta la barra de desplazamiento en Internet Explorer y Edge */
}

.table-component::-webkit-scrollbar {
    display: none; /* Oculta la barra de desplazamiento en navegadores webkit (Chrome, Safari, etc.) */
}

        </style>
    
    <section class="filter">
    <div class="filter-button">
        <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>filter-menu</title>
            <path
            d="M11 11L16.76 3.62A1 1 0 0 0 16.59 2.22A1 1 0 0 0 16 2H2A1 1 0 0 0 1.38 2.22A1 1 0 0 0 1.21 3.62L7 11V16.87A1 1 0 0 0 7.29 17.7L9.29 19.7A1 1 0 0 0 10.7 19.7A1 1 0 0 0 11 18.87V11M13 16L18 21L23 16Z" />
        </svg>
        </button>
    </div>
    </section>

        <section class="table-component">
            <article class="table-record">
            <div class="table-buttons">
                <div class="edit-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                </button>
                </div>
                <div class="delete-button">
                <button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
                </div>
            </div>
            <div class="table-data">
                <ul>
                <li><span>Email</span>Carumba@gmail.com</li>
                <li><span>Name</span>Carumba</li>
                </ul>
            </div>
            </article>

            <article class="table-record">
            <div class="table-buttons">
                <div class="edit-button">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                    </svg>
                </button>
                </div>
                <div class="delete-button">
                <button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                </button>
                </div>
            </div>
            <div class="table-data">
                <ul>
                <li><span>Email</span>Carumba@gmail.com</li>
                <li><span>Name</span>Carumba</li>
                </ul>
            </div>
            </article>




            <article class="table-record">
              <div class="table-buttons">
                  <div class="edit-button">
                  <button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                      </svg>
                  </button>
                  </div>
                  <div class="delete-button">
                  <button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                  </button>
                  </div>
              </div>
              <div class="table-data">
                  <ul>
                  <li><span>Email</span>Carumba@gmail.com</li>
                  <li><span>Name</span>Carumba</li>
                  </ul>
              </div>
              </article>
              <article class="table-record">
              <div class="table-buttons">
                  <div class="edit-button">
                  <button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                      </svg>
                  </button>
                  </div>
                  <div class="delete-button">
                  <button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                  </button>
                  </div>
              </div>
              <div class="table-data">
                  <ul>
                  <li><span>Email</span>Carumba@gmail.com</li>
                  <li><span>Name</span>Carumba</li>
                  </ul>
              </div>
              </article>
              <article class="table-record">
              <div class="table-buttons">
                  <div class="edit-button">
                  <button>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                          d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                      </svg>
                  </button>
                  </div>
                  <div class="delete-button">
                  <button>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                  </button>
                  </div>
              </div>
              <div class="table-data">
                  <ul>
                  <li><span>Email</span>Carumba@gmail.com</li>
                  <li><span>Name</span>Carumba</li>
                  </ul>
              </div>
            </article>
        </section>
        `
    const filterButton = this.shadow.querySelector('.filter-button')

    filterButton?.addEventListener('click', () => {
      document.dispatchEvent(new CustomEvent('showFilterModal', {
      }))
    })

    const tableSection = this.shadow.querySelector('.table-component')
    tableSection?.addEventListener('click', async (event) => {
      if (event.target.closest('.edit-button')) {
        alert('Has pulsado edition')
      }

      if (event.target.closest('.delete-button')) {
        document.dispatchEvent(new CustomEvent('showDeleteModal', {

        }))
      }
    })
  }
}

customElements.define('table-records-component', TableRecords)
