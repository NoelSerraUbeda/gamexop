class Modal extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    document.addEventListener('reload', this.handleNewChat.bind(this));
  }

  connectedCallback() {
    this.addEventListener('reload', this.handleReload.bind(this));
  }

  handleReload() {
    this.render();
  }

  handleNewChat = (event) => {
    this.render();
  };

  render() {
    this.shadow.innerHTML = /* html */`
      <style>
        .modal {
          background-color: rgba(0,0,0,0.4);
          justify-content: end;
          position: fixed;
          overflow: auto;
          align-items: end;
          display: block;
          height: 100%;
          width: 100%;
          z-index: 5;
          left: 0;
          top: 0;
        }

        .modal-content {
          background-color: #fefefe;
          justify-content: center;
          border: 1px solid #888;
          border-radius: 1rem;
          align-items: center;
          margin: 1rem auto;
          font-size: 40px;
          display: flex;
          width: 95%;
          height: 90%;
          z-index: 999;
          position: relative;
        }

        .close-button {
          position: absolute;
          top: 5px;
          right: 20px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .close-button:hover {
          transform: scale(1.1);
        }

        section {
          width:100%;
          height:100%;
          padding:1rem;
        }

        h3 {
          margin:1rem;
          font-size:24px;
        }

        img {
          width:15rem;
          height: 10rem;
        }

        .area {
          display:flex;
          justify-content:space-between;
          margin-right:5rem;
        }

        .data {
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:1rem;
          flex:1;
          padding:1rem;
          width:95%;
        }

        .data input{
          width:90%;
          height:2rem;
          font-size:26px;
        }

        .text {
          display:flex;
          flex-direction:column;
          justify-content:end;
          align-items:end;
          gap:1rem;
          background-color:lightgrey;
          width:30%;
          height:40rem;
        }

        .text button {
          margin:1rem;
          width:10rem;
        }

      </style>
      <div class="modal">
        <div class="modal-content">
          <span class="close-button">x</span>
          <section>
            <h3>Imagen destacada</h3>
            <hr>
            <button>Galera</button>
            <button>Subir Imagen</button>
            <div class="area">
              <div class="image">
                <h3>Imágenes</h3>
                <img src="https://i.kym-cdn.com/photos/images/original/002/486/119/711.jpg" alt="Imagen 1">
                <img src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" alt="Imagen 2">
                <img src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" alt="Imagen 3">
                <img src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" alt="Imagen 4">
              </div>
              <div class="text">
                <h3>Datos de la imagen</h3>
                <div class="data">
                  <input type="text" placeholder="Título">
                  <input type="text" placeholder="Texto alternativo">
                </div>
                <button>Elegir imagen</button>
              </div>
          </div>
          </section>
        </div>
      </div>
    `;

    const closeButton = this.shadow.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      this.closeModal();
    });
  }

  closeModal() {
    this.shadow.innerHTML = '';
  }
}

customElements.define('modal-component', Modal);

// Ejemplo de cómo utilizar el evento 'reload' para recargar el componente
const modalComponent = document.querySelector('modal-component');
modalComponent.dispatchEvent(new Event('reload'));
