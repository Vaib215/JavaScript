const btn = document.querySelector('button')
const progressBar = document.querySelector('.progress-bar')
let RUNS = 0
let isRunning = false

const runProgressBar = () => {
  isRunning = true;
  if (RUNS == 0) {
    isRunning = false;
    return
  }
  progressBar.classList.add('running')
  setTimeout(() => {
    progressBar.classList.remove('running')
    RUNS--
  }, 3000)
  setTimeout(runProgressBar,3200)
}

const handleBtnClick = async () => {
  console.log("clicked")
  RUNS++
  !isRunning && runProgressBar()
}

btn.addEventListener('click', handleBtnClick)