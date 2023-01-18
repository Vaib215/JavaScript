// check for click event on switch
const swtch = document.querySelector('.switch')

// if found => toggle 'on' in body
const toggleBulb = () => {
    document.body.classList.toggle('on')
}

swtch.addEventListener('click', toggleBulb)