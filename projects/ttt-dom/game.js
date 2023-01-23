const gameContainer = document.querySelector('.game-container')
const gameCells = document.querySelectorAll('.game-cell')
const title = document.querySelector('h1')
const resetBtn = document.querySelector('#reset')

// Game starts with X
let chanceOfX = true

// Found a winner
let isWinnerFound = false

// Counter variable
let cnt = 0

// Checks for each winning condition
const checkSingle = (x,y,z) => {
    const a = gameCells[x].innerHTML
    const b = gameCells[y].innerHTML
    const c = gameCells[z].innerHTML
    if(a!=="" && a==b && b==c){
        isWinnerFound = true
    }
}

// This function checks for a winner
const checkWin = () => {
    checkSingle(0,1,2)
    checkSingle(3,4,5)
    checkSingle(6,7,8)
    checkSingle(0,3,6)
    checkSingle(1,4,7)
    checkSingle(2,5,8)
    checkSingle(0,4,8)
    checkSingle(2,4,6)
    return isWinnerFound
}

// This function checks if the click is valid
const checkValidClick = e => {
    // Checks if the user has clicked on a gamecell
    if(e.target.classList[0]==="game-cell"){
        // If the cell is already filled then return
        if(e.target.innerHTML!==""){
            return;
        }
        cnt++
        // If the chance is of X
        if(chanceOfX===true){
            e.target.innerHTML = 'X'
            chanceOfX = false
        } 
        // If the chance is of O
        else {
            e.target.innerHTML = 'O'
            chanceOfX = true
        }
        // Check if Winner is found
        if(checkWin()){
            title.innerHTML = e.target.innerHTML + " won the game"
            gameContainer.removeEventListener('click', checkValidClick)
            return
        }
        // Check if the game is draw
        if(cnt===9){
            title.innerHTML = "Nobody won the game"
            gameContainer.removeEventListener('click', checkValidClick)
        }
    }
}

// This function is used to reset the game
const resetGame = () => {
    chanceOfX = true
    isWinnerFound = false
    cnt = 0
    gameCells.forEach(cell=>cell.innerHTML="")
    gameContainer.addEventListener('click', checkValidClick)
    title.innerHTML = "TTT"
}

gameContainer.addEventListener('click', checkValidClick)
resetBtn.addEventListener('click', resetGame)