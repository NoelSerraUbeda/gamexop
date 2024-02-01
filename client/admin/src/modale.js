document.addEventListener("DOMContentLoaded", function () {
  const imageLabelButton = document.querySelector(".image-label")

  imageLabelButton.addEventListener("click", function (event) {
    event.preventDefault()
    const reloadEvent = new CustomEvent('reload')
    document.dispatchEvent(reloadEvent)
  })
})
