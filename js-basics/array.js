// Arrays in JS
// Datatype to store multiple datatypes
let arr = [45, "Name", true, [45, 85, 'Store'], { arrItem: 'item' }]

// console.log(arr)
// for(let i in arr){
//     if(i==2) break
//     console.log(arr[i])
// }

// Properties
// Accessing
// console.log(arr[1])
// Finding length
// console.log(arr[arr.length-2].length)
// Changing
arr[1] = "Vaibhav"
// console.log(arr)

// typeof array in js
// console.log(typeof arr)
/*
Array is a type of object. Here's how
let arr = [45,"Name",true,[45,85,'Store'],{arrItem: 'item'}]

let arr = {
    0:45,
    1:"Name",
    2:true,
    3:[45,85,'Store'],
    4:{arrItem: 'item'}
}

*/

// Array Methods
// toString method - returns the array as single string
// console.log(arr.toString())

// join method
// console.log(arr.join('//00'))

// pop method
arr.pop()
// console.log(arr)

// push method
arr.push(21)
// console.log(arr)

// shift
// similar to dequeue in queue
arr.shift()
// console.log(arr)

// unshift
// similar to enqueue but at beginning
arr.unshift('first')
// console.log(arr)

// delete - just remove the elements and still an empty space lies in the array
// delete arr[2]
// console.log(arr)

// concat
let ar1 = ['item1', 'item2', 'item3']
let ar2 = [45, 84, 74]
// console.log(ar1.concat(ar2))

// fill 
ar1.fill(4)
// console.log(ar1)

// sort
ar2.sort()
// console.log(ar2)

// splice
// const nums = [84,95,74,65]
// console.log(nums.splice(1,4,8,8,74,96))
// console.log(nums)

// slice
// console.log(nums.slice(1,3))

// reverse
// console.log(arr.reverse())
const items = [84, 95, 74, 65]
// Loops in array
// for-in loop
// for(let i in items){
//    console.log(i) // Output- 0 1 2 3
// }

// for-of loop
// for(let i of items){
//    console.log(i) // Output- 84 95 74 65
// }

// for-each loop
// items.forEach((value, index, array) => {
//     console.log(value, index, array)
//     /*
//     84 0 [ 84, 95, 74, 65 ]
//     95 1 [ 84, 95, 74, 65 ]
//     74 2 [ 84, 95, 74, 65 ]
//     65 3 [ 84, 95, 74, 65 ]
//     */
// })

// map loop

// let newArray = items.map((value)=>{
//     return value*2
// })

// console.log(items)
// console.log(newArray)

// let marksObj = [
//     {student:"Vaibhav",marks:98},
//     {student:"Vaib",marks:97},
//     {student:"Hunny",marks:99},
//     {student:"Ved",marks:99}
// ]

// let onlyMarks = marksObj.map(value=>value.marks)

// console.log(marksObj)
// console.log(onlyMarks)

// filter method
// let filterNums = items.filter((value)=>{
//     return value<=75
// })

// console.log(filterNums)

// reduce method
// let marks = [84,74,63,74,95]
// let result = marks.reduce((prev,value)=>{
//     return prev+value
// },0)
// 0 84 84+74 84+74+63 84+74..
// console.log(result)

// let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let fact = nums.reduce((factorial,value)=>{
//     return factorial*value
// },1)

// console.log(fact)

// Array.from()
// converts an object into an array if possible
// let friend = "Vaibhav"
// let friendArr = Array.from(friend)
// friendArr = friend.split('')
// console.log(friendArr)