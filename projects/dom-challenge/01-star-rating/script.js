const stars = document.querySelector('.star-wrapper')
const starEls = stars.querySelectorAll('.star')
const starCount = document.querySelector('#star-count')

let SELECTED_TILL = 0

const handleMouseClick = e => {
  SELECTED_TILL = +e.target.dataset.index
  starCount.innerHTML = SELECTED_TILL
}

const handleMouseOver = e => {
  const HOVERED_TILL = +e.target.dataset.index
  starEls.forEach(star=>star.classList.remove('filled'))
  for(let i=0;i<HOVERED_TILL;i++){
    starEls[i].classList.add('filled')
  }
}

const handleMouseOut = () => {
  starEls.forEach(star=>star.classList.remove('filled'))
  for(let i=0;i<SELECTED_TILL;i++){
    starEls[i].classList.add('filled')
  }
}

stars.addEventListener('click', handleMouseClick)
stars.addEventListener('mouseover', handleMouseOver)
stars.addEventListener('mouseout', handleMouseOut)