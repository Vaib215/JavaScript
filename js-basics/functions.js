// Function in js
// Block of code which performs an operation or do a piece of work. It can be resused. It may or may not return something

// Way to declare functions
// method == function
// 1. using function keyword
function sayHi(name){
    console.log("Hi "+name)
}

// To use a function, we need to call/invoke it.
sayHi("Guys")
sayHi("buddy")

// 2. Using let/const keyword (arrow function)
// arrow function - recent feature of JS
let greet = (friendName) => {
    console.log("Good morning "+friendName)
}

greet("Jarvis")

function sum(a,b){
    return a+b
}

console.log(sum(4,5))
console.log(sum("4",4))
let result = sum("hi"," bro")
console.log(result)