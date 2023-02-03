const ham = document.querySelector('#ham')
let isMenuClicked = false

const toggleMenu = () => {
  ham.parentElement.classList.toggle('show')
  if(!isMenuClicked){
    ham.src = './images/icon-menu-close.svg'
  }else{
    ham.src = './images/icon-menu.svg'
  }
  isMenuClicked = !isMenuClicked
}

ham.addEventListener('click', toggleMenu)