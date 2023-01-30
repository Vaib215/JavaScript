// In JS, we've 2 types of datatypes:
// 1. primitive datatypes: Number, Null, Undefined, String, Boolean, BigInt, Symbol, NaN
// Number : 14, -54, 12.25
let variable = 45
// console.log(typeof num)
variable = 67.89
variable = null
let vaib = null
vaib="Vaibhav"
vaib=true // false
console.log(typeof vaib)
let x = Number.MAX_SAFE_INTEGER
console.log(BigInt(x)*BigInt(x))
// Big int cant store decimal values
// Use bigint only when specifically required
console.log(typeof 2.0%0)

// 2. Object - non-primitve datatype
// Object stores key-value pairs
let item = {
    itemName: "Moto G51",
    price: 12999,
    is5G: true
}

console.log(item.itemName)
console.log(typeof item.itemName)