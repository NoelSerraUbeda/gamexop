class Faqs extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.loadData()
    this.render()
  }

  async loadData () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${this.getAttribute('endpoint')}?size=4`)
    const data = await response.json()
    this.faqs = data
  }

  render () {
    this.shadow.innerHTML = /* html */ `
      <style>
        .faqs-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        details {
          color: hsl(0, 0%, 100%);
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.2rem;
          display:flex;
        }
        summary {
          border-bottom: 1px solid hsl(0, 0%, 100%);
          color: hsl(0, 0%, 100%);
          cursor: pointer;
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          padding: 0.5rem;
        }
        picture {
          max-width: 100%;
          height: auto;
        }
      </style>

      <div class="faqs-container"></div>
    `

    const faqsContainer = this.shadow.querySelector('.faqs-container')

    this.faqs.forEach(faq => {
      const faqElement = document.createElement('details')
      faqsContainer.appendChild(faqElement)
      const faqElementSummary = document.createElement('summary')
      faqElement.appendChild(faqElementSummary)

      faqElement.name = 'faq'
      faqElementSummary.textContent = faq.locales.question
      faqElement.innerHTML += faq.locales.answer

      console.log(faq.images)
      const faqPicture = document.createElement('picture')
      faqElement.appendChild(faqPicture)

      const faqSourceXS = document.createElement('source')
      faqPicture.appendChild(faqSourceXS)
      faqSourceXS.srcset = `${import.meta.env.VITE_API_URL}/api/front/images/image/${faq.images.xs['feature-image'].filename}`
      faqSourceXS.media = '(max-width: 480px)'

      const faqSourceSM = document.createElement('source')
      faqPicture.appendChild(faqSourceSM)
      faqSourceSM.srcset = `${import.meta.env.VITE_API_URL}/api/front/images/image/${faq.images.sm['feature-image'].filename}`
      faqSourceSM.media = '(min-width: 481px) and (max-width: 1024px)'

      const faqSourceMD = document.createElement('source')
      faqPicture.appendChild(faqSourceMD)
      faqSourceMD.srcset = `${import.meta.env.VITE_API_URL}/api/front/images/image/${faq.images.md['feature-image'].filename}`
      faqSourceMD.media = '(min-width: 1025px) and (max-width: 1440px)'

      const faqSourceLG = document.createElement('source')
      faqPicture.appendChild(faqSourceLG)
      faqSourceLG.srcset = `${import.meta.env.VITE_API_URL}/api/front/images/image/${faq.images.lg['feature-image'].filename}`
      faqSourceLG.media = '(min-width: 1025px) and (max-width: 1440px)'

      const faqImg = document.createElement('img')
      faqImg.src = `${import.meta.env.VITE_API_URL}/api/front/images/image/${faq.images.xs['feature-image'].filename}`
      faqImg.alt = 'FAQ Image'
      faqPicture.appendChild(faqImg)
    })
  }
}

customElements.define('faqs-component', Faqs)
