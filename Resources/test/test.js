const reservationtabs = document.querySelectorAll('[data-tab-target]')
const reservationtabContents = document.querySelectorAll('[data-tab-content]')

reservationtabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    reservationtabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    reservationtabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})
