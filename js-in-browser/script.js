// console - it is a javascript object which has several methods like-
// log - output a message
console.log('hello i\'m log')
// assert - asserts a condition -> creates an error in console if the condition is false
console.assert(4>2)
const items = {
    0:45,
    1:"Name",
    2:true,
    3:[45,85,'Store'],
    4:{arrItem: 'item'}
}

console.table(items)

console.warn("I am a warning")
console.error("I am an error")
console.info("I am an info")

// interaction using browser window
// alert("This site can be malicious")
// const userName = prompt("What is your name?")
// const isSure = confirm("Are you sure you want to exit")
// console.log(isSure)

// window
// => dom - document object model
// => bom - browser object model
// => core javascript

// dom - document object model
// represent the page contest as HTML
// contains method to manipulate the webpage

// bom - browser object model
// represent the tab
// contains methods to manipulate the tab (redirect)
// location.href("https://www.google.com")