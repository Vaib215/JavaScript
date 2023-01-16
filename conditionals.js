// Conditional statements:  These are some checks after which some block of code may or not run
// if => this takes a condition in argument and runs only if true
// if(condition==true){
//    execute this code if condition is true
// }
// if..else => same as above but we also specify the block of code which runs if condition is false
// === & !==

// let age = 19
// if(age>=18){
//     console.log("You can cast a vote")
// } else {
//     console.log("Oops you're a kid")
// }

let game1 = 17
let game2 = "17"

(game1===game2)?console.log("They are equal"):console.log("Not equal")
// if(game1==game2){
//     console.log("They are equal")
// } else{
//     console.log("Something is fishy")
// }


// if(game2==17){
//     if(typeof game2 == Number){
//         console.log("This is a number")
//     } else {
//         console.log("This is something else")
//     }
// }

// Note : Prefer to Use '===' than '==' 

// If else ladder
let marks = 45
if(marks>40){
    console.log("A+")
} else if(marks>30){
    console.log("A")
} else{
    console.log("B")
}

// Ternary or conditional operator ?:
// condition?do this if true:do this false;