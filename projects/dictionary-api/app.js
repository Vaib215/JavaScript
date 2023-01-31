// Code for main app logic
const searchBar = document.querySelector('#search')
const [wordEl, pronounceEl, swapEl, swapInpEl, audioEl, detailEl] = document.querySelectorAll('#meaning-wrapper [data-role]')

const populateSingleMeaning = meaning => {
  const sect = document.createElement('section')
  sect.className = "flex flex-col gap-4"
  sect.innerHTML = `
  <h3 class="type font-semibold text-lg">${meaning.partOfSpeech}</h3>
  <h4 class="text-lg">Meaning</h4>
  <ul class="list-disc ml-16">
      ${meaning.definitions.map(elem => {
    return `<li>${elem.definition}</li>`
  }).join('')}
  </ul>
  `
  if(meaning.synonyms.length>0){
    sect.innerHTML += `
    <b> Synonyms: ${meaning.synonyms.map(elem=>{
      return elem
    }).join(', ')}
    `
  }
  if(meaning.antonyms.length>0){
    sect.innerHTML += `
    <b> Antonyms: ${meaning.antonyms.map(elem=>{
      return elem
    }).join(', ')}
    `
  }
  detailEl.append(sect)
}

const populateMeaning = shabd => {
  console.log(shabd)
  wordEl.innerHTML = shabd.word
  pronounceEl.innerHTML = shabd.phonetic
  shabd.meanings.map(meaning => {
    populateSingleMeaning(meaning)
  })
  for (let i = 0; i < shabd.phonetics.length; i++) {
    const element = shabd.phonetics[i];
    if(element.audio!==''){
      audioEl.src = element.audio
      audioEl.load()
      swapEl.classList.remove('hidden')
      break
    }
  }
}

const handleSearchKeyPress = async (e) => {
  if (e.key !== 'Enter') return;
  const word = searchBar.value
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  const data = await response.json()
  populateMeaning(data[0])
  searchBar.value = ''
}

const handleAudio = e => {
  audioEl.play()
}

swapEl.addEventListener('click', handleAudio)
audioEl.addEventListener('ended', ()=>{
  swapInpEl.click()
  audioEl.pause()
})
searchBar.addEventListener('keypress', handleSearchKeyPress)

// Code for themes and font

const themeSelect = document.querySelector('#theme')
const fontSelect = document.querySelector('#font')
const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

const fonts = ["sans", "serif", "mono"]

const populateThemes = () => {
  for (const theme of themes) {
    const option = document.createElement('option')
    option.value = theme
    option.innerHTML = theme.slice(0, 1).toUpperCase() + theme.slice(1)
    themeSelect.append(option)
  }
}
const populateFonts = () => {
  for (const font of fonts) {
    const option = document.createElement('option')
    option.value = font
    option.innerHTML = font.slice(0, 1).toUpperCase() + font.slice(1)
    fontSelect.append(option)
  }
}
const changeTheme = () => {
  if (localStorage.getItem('theme')) {
    document.querySelector('html').dataset.theme = localStorage.getItem('theme')
  }
}
const changeFont = () => {
  if (localStorage.getItem('font')) {
    document.querySelector('html').className = `font-${localStorage.getItem('font')}`
  }
}
const handleThemeChange = (e) => {
  localStorage.setItem('theme', e.target.value)
  changeTheme()
}
const handleFontChange = (e) => {
  localStorage.setItem('font', e.target.value)
  changeFont()
}

changeTheme()
populateThemes()
populateFonts()
themeSelect.addEventListener('change', handleThemeChange)
fontSelect.addEventListener('change', handleFontChange)