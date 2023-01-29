const createForm = document.querySelector('#create-sect')
const btn = document.querySelector('#btn')
const list = document.querySelector('#notes')
const titleEl = document.querySelector('#title')
const contentEl = document.querySelector('#content')
const drawerToggle = document.querySelector('.drawer-toggle')
const sectTitle = document.querySelector('#sect-title')
const newNoteBtn = document.querySelector('#new-note-btn')
const themeSelect = document.querySelector('#theme')
const themes = ["Light","Dark","Cupcake","Bumblebee","Emerald","Corporate","Synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula","cmyk","autumn","business","acid","lemonade","night","coffee","winter"]

let currentNoteId = undefined

const populateThemes = () => {
    for(const theme of themes){
        const option = document.createElement('option')
        option.value = theme
        option.innerHTML = theme.slice(0,1).toUpperCase() + theme.slice(1)
        themeSelect.append(option)
    }
}

const populateNote = async (id) => {
    const response = await fetch(`https://kora-kagaz-api.onrender.com/notes/${id}`)
    const data = await response.json()
    titleEl.value = data.title
    contentEl.value = data.content
    drawerToggle.checked = !(drawerToggle.checked)
    btn.innerHTML = "Update"
    sectTitle.innerHTML = "Update Notes"
}

const deleteTask = async(elem) => {
    const id = elem.parentElement.dataset.id
    await fetch(`https://kora-kagaz-api.onrender.com/notes/${id}`, {
        method: 'DELETE'
    })
    elem.parentElement.parentElement.remove()
    alert('Note has been deleted successfully')
}

const handleListClick = (e) => {
    if(e.target.dataset.role==="delete"){
        const confirmation  = confirm('Are you sure to delete this note?')
        if(!confirmation) return
        deleteTask(e.target)
        return
    }
    if (e.target.localName !== 'a') return;
    const noteId = e.target.dataset.id
    currentNoteId = noteId
    populateNote(noteId)
}

const handleNewNoteClick = () => {
    btn.innerHTML = 'Create'
    titleEl.value = ''
    contentEl.value = ''
    sectTitle.innerHTML = 'Create Notes'
}

const appendNoteToList = (note) => {
    const li = document.createElement('li')
    li.innerHTML = `<a data-id="${note._id}">
    <span>${note.title}</span><span data-role="delete" class="btn btn-ghost ml-auto"><img class="w-6 h-6" alt="icon-delete" src="https://img.icons8.com/fluency-systems-regular/36/ffffff/delete-forever.png"/></span>
    </a>`
    list.append(li)
}

const refreshNotes = async () => {
    const response = await fetch('https://kora-kagaz-api.onrender.com/notes')
    const data = await response.json()
    data.map(note => {
        appendNoteToList(note)
    })
}

const updateTask = async () => {
    const title = titleEl.value
    const content = contentEl.value
    if (!(/(.|\s)*\S(.|\s)*/.test(content))) {
        alert("The content can't be empty")
        return
    }
    await fetch(`https://kora-kagaz-api.onrender.com/notes/${currentNoteId}`, {
        method: 'PUT',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ title, content })
    })
    document.querySelector(`a[data-id="${currentNoteId}"]`).innerHTML = title
}

const createTask = async () => {
    const title = titleEl.value
    const content = contentEl.value
    if (!(/(.|\s)*\S(.|\s)*/.test(content))) {
        alert("The content can't be empty")
        return
    }
    await fetch('https://kora-kagaz-api.onrender.com/notes', {
        method: 'POST',
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ title, content })
    })
    refreshNotes()
    alert('Notes have been created successfully')
    handleNewNoteClick()
}

const handleSubmit = (e) => {
    e.preventDefault()
    if (btn.innerHTML === "Create") {
        createTask()
    } else if (btn.innerHTML === "Update") {
        updateTask()
    }
}

const changeTheme = () => {
    if(localStorage.getItem('theme')){
        document.querySelector('html').dataset.theme = localStorage.getItem('theme')
    }
}

const handleThemeChange = (e) => {
    localStorage.setItem('theme', e.target.value)
    changeTheme()
}

refreshNotes()
populateThemes()
changeTheme()

createForm.addEventListener('submit', handleSubmit)
list.addEventListener('click', handleListClick)
newNoteBtn.addEventListener('click', handleNewNoteClick)
themeSelect.addEventListener('change', handleThemeChange)