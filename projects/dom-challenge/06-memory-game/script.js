const btn = document.querySelector('button')
const cells = document.querySelectorAll('.cell')
const gameContainer = document.querySelector('#game-container')
let SCORE = 0
let GAME_QUEUE = []

const blink = element => {
  element.classList.add('active')
  setTimeout(() => {
    element.classList.remove('active')
  }, 300)
}

const handleCellClick = e => {
  blink(e.target)
  if(e.target === cells[GAME_QUEUE.shift()]){
    SCORE++
    GAME_QUEUE = []
    for(let i=0;i<SCORE;i++){
      setTimeout(startGame,300*i)
    }
  }
  else{
    alert('incorrect')
  }
}

const startGame = () => {
  SCORE++
  const randomInd = Math.floor(Math.random() * 5)
  blink(cells[randomInd])
  GAME_QUEUE.push(randomInd)
}

gameContainer.addEventListener('click', handleCellClick)

btn.addEventListener('click', startGame)