const dropArea = document.querySelector('#drop-area')
const fileInput = document.querySelector('#file-input')
const audio = document.querySelector('#song')
const songsList = document.querySelector('#songs-queue')
const [prev, next] = document.querySelectorAll('.btn-wrapper button')

const songQueue = []
let CURR_SONG = 0

const addSongToQueue = files => {
    Array.from(files).forEach(file=>{
        songQueue.push(file)
        const songsListItem = document.createElement('li')
        if(file.name.length>40){
            songsListItem.innerHTML = file.name.slice(0,40)
        } else {
            songsListItem.innerHTML = file.name
        }
        songsList.append(songsListItem)
    })
    if(audio.paused){
        playSong()
        songsList.children[CURR_SONG].classList.add('playing')
    }
}

const handleDrop = e => {
    e.preventDefault()
    addSongToQueue(e.dataTransfer.files)
}

const playSong = () => {
    audio.src = URL.createObjectURL(songQueue[CURR_SONG])
    audio.load()
    audio.play()
}

const playPrev = () => {
    songsList.children[CURR_SONG].classList.remove('playing')
    CURR_SONG = ((CURR_SONG-1)+songQueue.length)%songQueue.length
    songsList.children[CURR_SONG].classList.add('playing')
    playSong()
}

const playNext = () => {
    songsList.children[CURR_SONG].classList.remove('playing')
    CURR_SONG = ((CURR_SONG+1)+songQueue.length)%songQueue.length
    songsList.children[CURR_SONG].classList.add('playing')
    playSong()
}

fileInput.addEventListener('change',e=>{
    addSongToQueue(e.target.files)
})

dropArea.addEventListener('click',()=>{
    fileInput.click()
})

dropArea.addEventListener('drop',handleDrop)

dropArea.addEventListener('dragover',e =>{
    e.preventDefault()
})

prev.addEventListener('click', playPrev)
next.addEventListener('click', playNext)