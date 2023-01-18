// Ask the user to input the time in seconds
let seconds = prompt("Enter the time in seconds")
let secondsCpy = +seconds

const interval = setInterval(()=>{
    console.clear()
    console.log(--secondsCpy +" seconds left")
},1000)

setTimeout(()=>{
    clearInterval(interval)
    alert("The time is finished")
},+seconds * 1000)
console.log("Hello")