export default (() => {
  const eraseButton = document.querySelector('.erase-button')
  const saveButton = document.querySelector('.save-button button')
  const fields = document.querySelectorAll('[data-minlength], [data-onlyletters], [data-mail]')

  // Reset
  const resetValue = () => {
    document.querySelectorAll('.tab-content.active input').forEach(element => {
      element.value = ''
    })
  }

  // Validar datos
  const validateInput = (input) => {
    // Contraseña
    if (input.hasAttribute('data-minlength')) {
      return input.value.length >= input.getAttribute('data-minlength') || input.value.length === 0

      // Nombre
    } else if (input.hasAttribute('data-onlyletters')) {
      return /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/u.test(input.value) || input.value.length === 0

      // Mail
    } else if (input.hasAttribute('data-mail')) {
      const emailRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9._-]*@[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+(\.[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+)+$/u
      return emailRegex.test(input.value) || input.value.length === 0
    }
  }

  // Clases de validación
  const applyValidationClass = () => {
    fields.forEach(input => input.classList.toggle('valid', validateInput(input)))
  }

  // Bucle
  fields.forEach(input => input?.addEventListener('input', () => {
    input.classList.toggle('error', !validateInput(input))
    applyValidationClass()
  }))

  // Botón de guardar datos
  saveButton?.addEventListener('click', () => {
    const allValid = Array.from(fields).every(input => validateInput(input) && input.value.trim() !== '')

    if (allValid) {
      showMessage('correcto')
    } else {
      showMessage('error')
    }
  })

  // Evento de clic en el botón de borrar
  eraseButton?.addEventListener('click', resetValue)

  // Mostrar mensaje
  const showMessage = (messageType) => {
    const message = document.querySelector('.crud-form .messageContainer')
    const correctSpan = document.querySelector('.crud-form .messageContainer .correct')
    const errorSpan = document.querySelector('.crud-form .messageContainer .error')

    correctSpan.style.display = messageType === 'correcto' ? 'inline-block' : 'none'
    errorSpan.style.display = messageType === 'error' ? 'inline-block' : 'none'

    message.classList.add('active')
    saveButton.disabled = true

    setTimeout(() => {
      message.classList.remove('active')
      saveButton.disabled = false
    }, 2100)
  }
})()
