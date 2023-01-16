function double(num){
    return 2*num;
}

let arr = [45,74,85,32];
function binary(num){
    return Number(num).toString(2);
}
// 45 -> base 10
// 45 -> 1 + 0 + 4 + 8 + 0 + 32 -> (101101)2
let result = arr.map(binary)
console.log(result)