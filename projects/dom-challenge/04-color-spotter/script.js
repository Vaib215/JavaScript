const container = document.querySelector('.container')
const score = document.querySelector('#score')
let GRID_SIZE = 1

const getRandomColor = () => {
  const h = Math.floor(Math.random()*360)
  const s = 40
  return `hsl(${h},${s}%`
}

const populateNext = () => {
  container.style.setProperty('--grid-size', ++GRID_SIZE)
  score.innerHTML = GRID_SIZE - 2
  const cellColor = getRandomColor()
  container.innerHTML = `<div class="cell" style="--cell-clr:${cellColor},30%)"></div>`.repeat(Math.pow(GRID_SIZE,2))
  const cells = document.querySelectorAll('.cell')
  const randomCellIndex = Math.floor(Math.random()*(Math.pow(GRID_SIZE,2)))
  cells[randomCellIndex].style.setProperty('--cell-clr', `${cellColor},38%)`)
  cells[randomCellIndex].classList.add('spl')
}

const resetGame = () => {
  GRID_SIZE = 1
  populateNext()
}

const handleContainerClick = e => {
  if(e.target.classList.contains('spl')){
    populateNext()
  } else if(e.target.classList.contains('cell')){
    container.classList.add('shake')
    setTimeout(()=>{
      container.classList.remove('shake')
      alert(`Oops! You have chosen wrong grid. Your eye health is: ${GRID_SIZE - 2}`)
      resetGame()
    },1500)
  }
}

populateNext()

container.addEventListener('click', handleContainerClick)