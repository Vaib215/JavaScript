const boardContainer = document.querySelector('#board-container')
const cells = document.querySelectorAll('.cell')

const colorDiagLeft = (x,y) => {
  if(x<0 || y<0 || x>=8 || y>=8) return;
  if(cells[8*(x)+(y)].classList.contains('active')) return
  setTimeout(()=>{
    cells[8*(x)+(y)].classList.add('active');
    colorDiagLeft(x-1,y-1)
    colorDiagLeft(x+1,y+1)
  },500)
}

const colorDiagRight = (x,y) => {
  if(x<0 || y<0 || x>=8 || y>=8) return;
  if(cells[8*(x)+(y)].classList.contains('active')) return
  setTimeout(()=>{
    cells[8*(x)+(y)].classList.add('active');
    colorDiagRight(x-1,y+1)
    colorDiagRight(x+1,y-1)
  },500)
}

const toggleBoardClick = e => {
  const row = +e.target.parentElement.dataset.row -1
  const col = +e.target.dataset.col -1
  cells.forEach(cell=>cell.className='cell')
  colorDiagLeft(row,col)
  colorDiagRight(row,col)
}

boardContainer.addEventListener('click', toggleBoardClick)