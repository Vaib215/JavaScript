const submitBtn = document.getElementById('submitBtn')
const taskList = document.querySelector('ul')

const createTask = (task) => {
    const li = document.createElement('li')
    li.innerHTML = `
<span>
    <input type="checkbox" />
    <span>${task}</span>
</span>
<span class="button-wrapper">
    <button class="secondary">Edit</button>
    <button class="contrast">Delete</button>
</span>
    `
    taskList.append(li)
}

const addTask = e => {
    e.preventDefault()
    const input = submitBtn.previousElementSibling
    if (input.value.trim() !== "") {
        createTask(input.value)
        input.value = ""
    }
}

const editTask = e => {
    const task = e.target.parentElement.previousElementSibling.lastElementChild
    const newTask = prompt("Edit the task",task.textContent)
    if(newTask.trim()!==""){
        task.innerHTML = newTask
    }
}

const toggleComplete = e => {
    const task = e.target.nextElementSibling
    task.classList.toggle('completed')
}

const deleteTask = e => {
    const li = e.target.parentElement.parentElement
    confirm("Are you sure you want to delete?") && taskList.removeChild(li)
}

const handleEvents = (e) => {
    if(e.target === submitBtn){
        addTask(e)
    } else if(e.target.classList.contains('secondary')){
        editTask(e)
    } else if(e.target.classList.contains('contrast')){
        deleteTask(e)
    } else if(e.target.getAttribute("type") === "checkbox"){
        toggleComplete(e)
    }
}

document.addEventListener('click', handleEvents)