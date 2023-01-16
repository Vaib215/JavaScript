// Loops in JS
// They provide us capability to run a block of code again and again.
// Different methods to implement loops in js
// 1. For loop
// for(let i=0;i<10;i++){
//     console.log(i)
// }
// 2. while loop
// let num=0,flag=true
// while(flag===true){
//     num++
//     if(num===2) continue;
//     console.log(num)
//     if(num===5) break;
// }
// 3. do while loop
// runs at least once
// do {
//     console.log(flag,num)
// } while (num++>20);
// 4. for in loop
// Used to iterate over index
const items=['mango','papaya','apple','kiwi'];
// for(let i in items){ // for(let i=0;i<items.length();i++)
//     console.log(items[i])
// }
// 5. for of loop
// Used to iterate over loop
// const friend = "Vaibhav"
// for(let i of friend){
//     console.log(i)
// }
// for (let i in friend) {
//     console.log(friend[i])
// }
// 6. For each loop
// It is used to iterate over value and index
// items.forEach((item,index)=>{
//     console.log(item,index)
// })
// ;for(let i=0;i<10;console.log(i++));