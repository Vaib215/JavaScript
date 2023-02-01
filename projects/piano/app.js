const audio = document.querySelector('audio')
const keysEl = document.querySelector('.keys')
const keyEl = document.querySelectorAll('.key')
const keys = ["a", "s",  "d",  "f",  "g",  "h",  "j",  "k",  "l",  ";",  "'"]

const playKey = key => {
  audio.src = `./audios/key-${key}.mp3`
  keyEl[keys.indexOf(key)].classList.add('active')
  setTimeout(()=>{
    keyEl[keys.indexOf(key)].classList.remove('active')
  },250)
  audio.load()
  audio.play()
}

const handleKeyPress = e => {
  if(keys.indexOf(e.key)===-1) return
  playKey(e.key)
}

const handleKeyClick = e => {
  playKey(e.target.innerText.toLowerCase())
}

document.addEventListener('keydown', handleKeyPress)
keysEl.addEventListener('click', handleKeyClick)