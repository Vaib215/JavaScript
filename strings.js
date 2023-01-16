// Strings in Javscript
// These are used to store literals(alphabets,symbols,etc)
let product = 'Moto G51'
let feature = ['5G',68,false]
product = "Moto G51"
product = `Moto G51 ${feature}
This is multiline
`
console.log(product)

// Escape Sequence character
// CU's students
let union = 'Cu\'s students'
union = "fjsdhfsdhfjs\"d"
union = "\\\\"
console.log(union)
product = 'this is a\nproduct\tname'
console.log(product)

// properties & methods
let veg = "potato"
console.log(veg.length)
console.log(veg.toUpperCase())
// p o t a t o
// 0 1 2 3 4 5
// x x v v x x
console.log(veg.slice(2,4))
console.log(veg.slice(2)) // prints tato
animal="Lion is the king"
console.log(animal.replace(' ','-'))
// replace only changes the first occurence of the search key
let friend = "Vaibhav"
let me = "Vaib"
console.log(friend+" "+me)
me = "    Vaib  Kumar   "
console.log(me)
console.log(me.trim())
console.log(veg)
// strings are immutable
me = "Ramanujana"
// me = "K"+me.slice(1)
console.log(me)

// split method
let elem = "My#name#is#Vaibhav"
console.log(elem)
elem = elem.split('#')
console.log(elem)
elem = elem.join(' ')
console.log(elem)