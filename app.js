const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.continuous = true;
recognition.lang = 'en-US'

const title = document.querySelector('h3')
const para = document.querySelector('#para')
const select = document.querySelector('#select')

let isListening = false
let index = 0

const listenEvent = () => {
    if (!isListening) {
        isListening = true
        recognition.start()
        title.textContent = "Listening... Click on the mic button to stop..."
        btn.innerHTML = '<img width="24" src="https://img.icons8.com/material-rounded/48/ffffff/microphone.png"/>Stop Listening'
    } else {
        recognition.stop()
        isListening = false
        title.textContent = "Not listening... Click on the mic button to start..."
        btn.innerHTML = '<img width="24" src="https://img.icons8.com/material-rounded/48/ffffff/microphone.png"/>Start Listening'
    }
}

const clearText = () => para.value = ""

const copyText = () => {
    navigator.clipboard.writeText(para.value)
    alert("Copied to Clipboard")
}

const loadLangs = async () => {
    const data = await fetch('lang.json')
    const response = await data.json()
    for (let lang in response) {
        if (response[lang].length === 1) {
            let opt = document.createElement('option')
            opt.innerText = lang
            opt.value = response[lang][0]
            opt.id = opt.value
            select.append(opt)
            continue;
        }
        const updatedResponse = response[lang].filter(lang => lang.length > 1)
        updatedResponse.forEach(subLang => {
            let opt = document.createElement('option')
            opt.innerText = lang + " - " + subLang[1]
            opt.value = subLang[0]
            opt.id = opt.value
            select.append(opt)
        })
    }
    select.querySelector("#en-US").setAttribute('selected','true')
}

const changeLang = e => {
    recognition.lang = e.target.value
    index = 0
    para.value += "\n"
}

recognition.onresult = e => {
    para.value += e.results[index++][0].transcript
}

document.addEventListener("click", e => {
    if (e.target.id === "btn") listenEvent()
    else if (e.target.id === "clear") clearText()
    else if (e.target.id === "copy") copyText()
})

document.addEventListener('DOMContentLoaded', loadLangs)
select.addEventListener('change', changeLang)