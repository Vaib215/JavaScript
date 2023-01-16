// DOm - HTML page structured as a tree where all the nodes are elements.
// 3 types of nodes:
// text node -> leaf node
// element node
// comment node

/*
document
|- HTML
    |-head - title,meta,script,link
    |-body - p,h1-h6,b,div,etc.

suppose element - well defined element in js
element.firstChild - first child node
element.firstElementChild - first child element
element.childNodes - gives us NodeList of child elements
element.lastChild - last child node
element.lastElementChild - last child element
*/
// document.documentElement - gives html element

let body = document.body // gives body
let list = body.childNodes
let list2arr = Array.from(list)

// firstChild = childNodes[0]
// lastChild = childNodes[childNodes.length-1]

// parent and sibling
// element.parentNode - gives parent node
// element.parentElement - gives parent Element
console.log(body.previousElementSibling)

// DOM collection are read only
// they are live. any change in the document also updates them
// they are iterable using for..of loop


const paragraph = document.getElementById('para')
const paraUsingQS = document.querySelector('#para')
const splElem = document.querySelectorAll(".spl")
const heading = document.getElementsByTagName('h1')
const splUsingClass = document.getElementsByClassName("spl")
const articleTitles = document.getElementsByName("article-title")