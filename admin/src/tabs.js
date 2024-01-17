export default (() => {
  const tabs = document.querySelector('.tabs')

  tabs?.addEventListener('click', (event) => {
    // Si tabs ha sido pulsado
    if (event.target.closest('.tab')) {
      // Asignar cada tab a su contenido
      const tab = event.target.closest('.tab')
      const tabContentId = tab.getAttribute('data-tab')
      const targetTabContent = document.querySelector(`.tab-content[data-tab="${tabContentId}"]`)

      // Esconde el resto de contenidos que no son el seleccionado
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active')
      })

      // Hacer visible el contenido seleccionado
      targetTabContent.classList.add('active')
      tabs.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('selected')
      })

      // Y marcar como selecionada la tab elegida
      tab.classList.add('selected')
    }
  })
})()
