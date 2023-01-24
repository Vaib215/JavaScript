const dropArea = document.querySelector('#drop-area')
const fileInput = document.querySelector('#file-input')
const audio = document.querySelector('#song')

const songQueue = []
let CURR_SONG = 0

const addSongToQueue = files => {
    Array.from(files).forEach(file=>{
        songQueue.push(file)
    })
    if(audio.paused){
        audio.src = URL.createObjectURL(songQueue[CURR_SONG])
        audio.load()
        audio.play()
    }
}

const handleDrop = e => {
    e.preventDefault()
    addSongToQueue(e.dataTransfer.files)
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