export default (() => {
  const filterSection = document.querySelector('.topbar-filter')
  const tableSection = document.querySelector('.crud-table')

  tableSection?.addEventListener('click', async (event) => {
    if (event.target.closest('.delete')) {
      document.dispatchEvent(new CustomEvent('show-destroy-modal', {}))
    }
  })

  filterSection?.addEventListener('click', async (event) => {
    if (event.target.closest('.filter-icon')) {
      document.dispatchEvent(new CustomEvent('show-filter-modal'))
    }
  })
})()
