const colorPalleteEls = document.querySelectorAll('.grid.palette')
const gridContainer = document.querySelector('#grid-container')

let currentColor = 'hsl(360,100%,100%)'

const getRandomColor = (i) => {
  const h = 36 * i
  const s = 60
  const l = 60
  return `hsl(${h},${s}%,${l}%)`
}

const populateColors = () => {
  colorPalleteEls.forEach((colorEl, index) => {
    colorEl.style.setProperty('--fill-color', getRandomColor(index))
  })
}

const handleGridClick = e => {
  if (e.target.classList.contains('palette')) {
    currentColor = e.target.style.getPropertyValue('--fill-color')
  } else if (e.target.classList.contains('grid')) {
    e.target.style.setProperty('--fill-color', currentColor)
  }
}

const handleGridDrag = e => {
  e.preventDefault()
  if (e.target.className === "grid") {
    e.target.style.setProperty('--fill-color', currentColor)
  }
}

const handleMouseUp = () => {
  gridContainer.removeEventListener('mouseover', handleGridDrag)
  document.removeEventListener('mouseup',handleMouseUp)
}

const triggerDrag = () => {
  gridContainer.addEventListener('mouseover', handleGridDrag)
  document.addEventListener('mouseup', handleMouseUp)
}

populateColors()

gridContainer.addEventListener('click', handleGridClick)

gridContainer.addEventListener('mousedown', triggerDrag)