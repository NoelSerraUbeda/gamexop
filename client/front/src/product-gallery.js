class ProductGallery extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    document.addEventListener('filterByCategory', this.handleFilterByCategory.bind(this))
    this.loadData().then(() => this.render())
  }

  handleFilterByCategory (event) {
    const categoryId = event.detail.categoryId
    const products = categoryId === 'null' ? this.products : this.products.filter(product => product.categoryId === Number(categoryId))
    this.render(products)
  }

  async loadData () {
    this.products = [
      {
        id: 1,
        path: '/juegos/call-of-duty',
        categoryId: 11,
        price: 80,
        priceBeforeDiscount: 100,
        percentage: 20,
        endOfDiscount: '31 de diciembre',
        locale: {
          title: 'Call of Duty Modern Warfare 3'
        },
        image: {
          url: '/call-of-duty.jpg',
          alt: 'Call of Duty'
        }
      },
      {
        id: 3,
        path: '/juegos/persona-5',
        categoryId: 5,
        price: 60,
        locale: {
          title: 'Persona 5 Royal'
        },
        image: {
          url: '/persona-5.jpg',
          alt: 'Persona 5 Royal'
        }
      },
      {
        id: 4,
        path: '/juegos/red-dead-redemption-2',
        categoryId: 2,
        price: 80,
        locale: {
          title: 'Red Dead Redemption 2'
        },
        image: {
          url: '/red-dead.jpg',
          alt: 'Red Dead Redemption 2'
        }
      },
      {
        id: 6,
        path: '/juegos/street-fighter-6',
        categoryId: 9,
        price: 80,
        locale: {
          title: 'Street Fighter 6'
        },
        image: {
          url: '/street-fighter.jpg',
          alt: 'Street Fighter 6'
        }
      },
      {
        id: 7,
        path: '/juegos/Hades',
        categoryId: 1,
        price: 30,
        locale: {
          title: 'Hades'
        },
        image: {
          url: '/hades.jpg',
          alt: 'Hades'
        }
      },
      {
        id: 8,
        path: '/juegos/Terraria',
        categoryId: 6,
        price: 20,
        locale: {
          title: 'Terraria'
        },
        image: {
          url: '/terraria.jpg',
          alt: 'Terraria'
        }
      },
      {
        id: 9,
        path: '/juegos/Octopath-traveler-2',
        categoryId: 5,
        price: 60,
        locale: {
          title: 'Octopath Traveler 2'
        },
        image: {
          url: '/octopath-2.jpg',
          alt: 'Octopath Traveler 2'
        }
      },
      {
        id: 10,
        path: '/juegos/Triangle-strategy',
        categoryId: 5,
        price: 60,
        locale: {
          title: 'Triangle Strategy'
        },
        image: {
          url: '/triangle.jpg',
          alt: 'Triangle Strategy'
        }
      },
      {
        id: 11,
        path: '/juegos/Chained Echoes',
        categoryId: 5,
        price: 30,
        locale: {
          title: 'Chained Echoes'
        },
        image: {
          url: '/chained-echoes.jpg',
          alt: 'Chained Echoes'
        }
      },
      {
        id: 12,
        path: '/juegos/hollow-knight',
        categoryId: 3,
        price: 40,
        locale: {
          title: 'Hollow Knight'
        },
        image: {
          url: '/hollow-knight.jpg',
          alt: 'Hollow Knigth'
        }
      },
      {
        id: 13,
        path: '/juegos/gato-roboto',
        categoryId: 4,
        price: 20,
        locale: {
          title: 'Gato Roboto'
        },
        image: {
          url: '/gato-roboto.jpg',
          alt: 'Gato Roboto'
        }
      },
      {
        id: 14,
        path: '/juegos/monster-hunter-world',
        categoryId: 3,
        price: 60,
        priceBeforeDiscount: 80,
        percentage: 20,
        endOfDiscount: '31 de diciembre',
        locale: {
          title: 'Monster Hunter World'
        },
        image: {
          url: '/monster-hunter.jpg',
          alt: 'Monster Hunter World'
        }
      }
    ]
  };

  render (products = this.products) {
    this.shadow.innerHTML =
    /* html */`
    <style>
      a{
        text-decoration: none;
      }

      .product-gallery {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1rem;
        overflow-x: auto;
        scroll-behavior: smooth;
        -ms-overflow-style: none;  
        padding: 1rem 2rem;
        scrollbar-width: none;  
      }

      .product {
        align-items: center;
        border:none;
        border-radius: 0.8rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        overflow: hidden;
        filter: brightness(0.8);
        transition: transform 0.3s ease;
        border: solid 6px white;
      }

      .product:hover {
        border-color:hsl(272 40% 35%);
        transform: scale(1.03);
        filter: brightness(1.2);
      }
      
      .product-title {
        align-items: center;
        background-color: hsl(0, 0%, 0%);
        display: flex;
        gap: 0.5rem;
        height: 5vh;
        justify-content: center;
        padding: 0.5rem 10%;
        width: 80%;
      }

      .product-title h2 {
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
        text-align: center;
      }

      .product .product-media-cover{
        height: 40vh;
        position: relative;
        width: 100%;
      }

      .product .product-media-cover .image,
      .product .product-media-cover .video {
        displaY: flex;
        height: 100%;
        position: absolute;
        width: 100%;
      }

      .product .product-media-cover .image img,
      .product .product-media-cover .video video {
        height: 100%;
        object-fit: cover;
        width: 100%;
      }

      .product-details {
        align-items: flex-end;
        background-color: hsl(0, 0%, 0%);
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        justify-content: flex-end;
        height: 5vh;
        padding: 1rem 5%;
        width: 90%;
      }

      .product-info span{
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 0.9rem;
      }

      .product-price{
        align-items: center;
        background-color: hsl(272 40% 35%);
        display: flex;
        gap: 0.5rem;
        padding: 0 0.5rem;
        width: max-content;
      }

      .product-price span{
        color: hsl(0, 0%, 100%);
        font-family: 'Ubuntu', sans-serif;
        font-size: 1rem;
      }

      .product-price span.product-discount-percentage{
        font-size: 1.5rem;
      }

      .product-price span.product-price-before-discount{
        text-decoration: line-through;
      }

      .product-price span.product-price{
        font-size: 1.5rem;
      }
    </style>

    <div class="product-gallery"></div>
    `

    products.forEach(product => {
      const productElementLink = document.createElement('a')
      productElementLink.href = product.path

      const productElement = document.createElement('div')
      productElementLink.appendChild(productElement)

      productElement.classList.add('product')
      productElement.dataset.endpoint = product.id
      productElement.dataset.categoryId = product.categoryId

      const productTitleContainer = document.createElement('div')
      productTitleContainer.classList.add('product-title')
      const productTitle = document.createElement('h2')
      productTitle.innerHTML = product.locale.title
      productTitleContainer.appendChild(productTitle)
      productElement.appendChild(productTitleContainer)

      const productMediaCover = document.createElement('div')
      productMediaCover.classList.add('product-media-cover')
      const imageContainer = document.createElement('div')
      imageContainer.classList.add('image')
      const productImageElement = document.createElement('img')
      productImageElement.src = product.image.url
      productImageElement.alt = product.image.alt
      imageContainer.appendChild(productImageElement)
      productMediaCover.appendChild(imageContainer)
      productElement.appendChild(productMediaCover)

      const productDetails = document.createElement('div')
      productDetails.classList.add('product-details')

      if (product.priceBeforeDiscount) {
        const productInfoContainer = document.createElement('div')
        productInfoContainer.classList.add('product-info')

        const productDiscountEnd = document.createElement('span')
        productDiscountEnd.innerText = `Oferta hasta el ${product.endOfDiscount}`
        productInfoContainer.appendChild(productDiscountEnd)

        productDetails.appendChild(productInfoContainer)

        const productPriceContainer = document.createElement('div')
        productPriceContainer.classList.add('product-price')

        const productDiscountPercentage = document.createElement('span')
        productDiscountPercentage.classList.add('product-discount-percentage')
        productDiscountPercentage.innerText = `- ${product.percentage}%`

        productPriceContainer.appendChild(productDiscountPercentage)

        const productPriceDiscountContainer = document.createElement('div')
        productPriceDiscountContainer.classList.add('product-price-discount')

        const productPriceBeforeDiscount = document.createElement('span')
        productPriceBeforeDiscount.classList.add('product-price-before-discount')
        productPriceBeforeDiscount.innerText = `${product.priceBeforeDiscount} €`
        productPriceContainer.appendChild(productPriceBeforeDiscount)

        const productPrice = document.createElement('span')
        productPrice.classList.add('product-price-after-discount')
        productPrice.innerText = `${product.price} €`
        productPriceContainer.appendChild(productPrice)

        productDetails.appendChild(productPriceContainer)
      } else {
        const productPriceContainer = document.createElement('div')
        productPriceContainer.classList.add('product-price')

        const productPrice = document.createElement('span')
        productPrice.classList.add('product-price')
        productPrice.innerText = `${product.price} €`
        productPriceContainer.appendChild(productPrice)

        productDetails.appendChild(productPriceContainer)
      }

      productElement.appendChild(productDetails)
      this.shadow.querySelector('.product-gallery').appendChild(productElementLink)

      productElementLink.addEventListener('click', event => {
        event.preventDefault()
        window.history.pushState({}, '', product.path)
        window.dispatchEvent(new Event('popstate'))
      })

      productElementLink.addEventListener('mouseenter', event => {
        this.loadPreview(event.target)
      })

      productElementLink.addEventListener('mouseleave', event => {
        this.shadow.querySelector('.product-media-cover .video').remove()
      })
    })
  }

  async loadPreview (element) {
    this.video = {
      url: '',
      alt: 'Call of Duty',
      cover: ''
    }

    const videoElement = document.createElement('video')
    videoElement.autoplay = true
    videoElement.muted = true

    const sourceElement = document.createElement('source')
    sourceElement.src = this.video.url
    sourceElement.type = 'video/webm'
    videoElement.appendChild(sourceElement)

    const videoContainer = document.createElement('div')
    videoContainer.classList.add('video')
    videoContainer.appendChild(videoElement)
    element.querySelector('.product-media-cover').appendChild(videoContainer)
  }
}

customElements.define('product-gallery-component', ProductGallery)
