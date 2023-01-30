let board = [
    ['#','#','#'],
    ['#','#','#'],
    ['#','#','#']
]

let count = 0
let foundWinner = false

const printBoard = () => {
    let res = ""
    board.forEach(row=>{
        row.forEach(pos=>{
            res += pos + " "
        })
        res += "\n"
    })
    console.clear()
    console.log(res)
}

const insert = (sign) => {
    let index = parseInt(prompt(`${sign}'s turn: Enter the index of board from 1 to 9`),10)
    if(index>9 || index<0){
        alert("You entered a wrong index. Please try again.")
        insert(sign)
        return
    }
    index--;
    let x = Math.floor(index%3)
    let y = Math.floor(index/3)
    if(board[y][x]!=="#"){
        alert("You entered a filled index. Please try again.")
        insert(sign)
        return
    }
    board[y][x] = sign
    printBoard()
    count++
}

const checkSingle = (a,b,c) => {
    if(board[a[0]][a[1]] === board[b[0]][b[1]] &&  board[b[0]][b[1]] === board[c[0]][c[1]] && board[b[0]][b[1]] !== "#"){
        alert(board[a[0]][a[1]]+" won the match")
        foundWinner = true
    }
}

const checkWin = () => {
    checkSingle([0,0],[0,1],[0,2]);
    checkSingle([1,0],[1,1],[1,2]);
    checkSingle([2,0],[2,1],[2,2]);
    checkSingle([0,0],[1,0],[2,0]);
    checkSingle([0,1],[1,1],[2,1]);
    checkSingle([0,2],[1,2],[2,2]);
    checkSingle([0,0],[1,1],[2,2]);
    checkSingle([0,2],[1,1],[2,0]);
}

const startGame = () => {
    printBoard()
    while(count!=9 && foundWinner!=true){
        insert('X')
        if(checkWin()) break;
        if(count==9 || foundWinner==true) break;
        insert('O')
        if(checkWin()) break;
    }
    let userChoice
    if(foundWinner==false){
        userChoice = confirm("This game was draw. Want to play again?")
    } else{
        userChoice = confirm("Do you want to play again?")
    }
    if(userChoice == true) {
        board = [
            ['#','#','#'],
            ['#','#','#'],
            ['#','#','#']
        ]
        count = 0
        foundWinner = false
        startGame()
    }
}

startGame()