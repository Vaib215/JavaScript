const form = document.querySelector('form')
const inputs = document.querySelectorAll('.form-control input')
const tBody = document.querySelector('tbody')
const resetBtn = document.querySelector('#reset')

const saveToStorage = (data) => {
    localStorage.setItem('form-data', data)
}

const populatePrevResult = () => {
    const data = localStorage.getItem('form-data')
    tBody.innerHTML = data
}

const addToTBody = (imgURL, student) => {
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    td.innerHTML = `<img src=${imgURL} alt=${student[1]}/>`
    tr.append(td)
    student.forEach(value=>{
        const td = document.createElement('td')
        td.innerHTML = value
        tr.append(td)
    })
    tBody.append(tr)
    saveToStorage(tBody.innerHTML)
}

const handleFormSubmit = async(e) => {
    e.preventDefault()
    let imageURL = "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/300x200.jpg"
    if(inputs[0].value!==""){
        const formData = new FormData()
        formData.append('file', inputs[0].files[0])
        formData.append('upload_preset', 'students_db');
        const response = await fetch('https://api.cloudinary.com/v1_1/dlc30ewuw/image/upload', {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        imageURL = data.url
    }
    let result = Array.from(inputs).map(input=>{
        if(input.getAttribute('name')!=="gender"){
            return input.value
        } else if(input.checked){
            return input.value
        }
    })
    result = result.filter(val=>val!==undefined)
    result = result.slice(1)
    addToTBody(imageURL, result, saveToStorage)
    resetBtn.click()
}

populatePrevResult()
form.addEventListener('submit', handleFormSubmit)