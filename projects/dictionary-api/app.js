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