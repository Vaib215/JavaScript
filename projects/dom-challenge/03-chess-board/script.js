const boardContainer = document.querySelector('#board-container')
const cells = document.querySelectorAll('.cell')

const colorDiag = (i,x,y) => {
  cells.forEach(cell=>cell.className='cell')
  let currCell = i, currRow= x, currCol = y,count=0;
  do{
    cells[currCell].classList.add('active')
    currCell-=9;
  } while(currRow-->0 && currCol-->0)
  currCell = i, currRow= x, currCol = y;
  while(currRow++<8 && currCol++<8){
    cells[currCell].classList.add('active')
    currCell+=9;
  } 
  currCell = i, currRow= x, currCol = y;
  do{
    cells[currCell].classList.add('active')
    currCell-=7;
  }while(currRow-->0 && currCol++<7)
  currCell = i, currRow= x, currCol = y;
  do{
    cells[currCell].classList.add('active')
    currCell+=7;
  } while(currRow++<7 && currCol-->0)
}

const toggleBoardClick = e => {
  const row = +e.target.parentElement.dataset.row -1
  const col = +e.target.dataset.col -1
  colorDiag(row*8+col,row,col)
}

boardContainer.addEventListener('click', toggleBoardClick)