const buttons = document.querySelectorAll('.grid div')
const display = document.querySelector('#display')

const solve = (operators, operands) => {
    let val2 = operands.pop()
    let val1 = operands.pop()
    let op = operators.pop()
    switch (op) {
        case "+":
            operands.push(val1 + val2)
            break;
        case "-":
            operands.push(val1 - val2)
            break;
        case "*":
            operands.push(val1 * val2)
            break;
        case "/":
            operands.push(val1 / val2)
            break;
        case "^":
            operands.push(Math.pow(val1, val2))
            break;
        default:
            break;
    }
}

const infixEval = exp => {
    const operands = []
    const operators = []
    const oprts = "-+*/^"
    if(oprts.indexOf(exp[0])!==-1){
        exp = "0"+exp
    }
    let i = 0
    while (i < exp.length) {
        if (!isNaN(+exp[i]) || exp[i]===".") {
            let number = ""
            while (!isNaN(+exp[i]) || exp[i]===".") {
                number += exp[i]
                i++;
            }
            operands.push(+number)
        } else if(oprts.indexOf(exp[i])!==-1){
            let currOp = exp[i]
            let currPre = Math.ceil((oprts.indexOf(currOp) + 1)/2)
            if(!operators.length) {
                operators.push(currOp)
                i++
                continue;
            }
            let topOp = operators.slice(-1)[0]
            let topPre = Math.ceil((oprts.indexOf(topOp) + 1)/2)
            while(currPre<=topPre){
                solve(operators, operands)
                if(!operators.length) break
                topOp = operators.slice(-1)[0]
                topPre = Math.ceil((oprts.indexOf(topOp) + 1)/2)
                i++
                currOp = exp[i]
                currPre = Math.ceil((oprts.indexOf(currOp) + 1)/2)
            }
            operators.push(currOp)
            i++
        }
    }
    while(operators.length){
        solve(operators, operands)
    }
    return operands[0]
}

const handleInput = btn => {
    const oprts = "-+*/^"
    if(display.value==="" && oprts.indexOf(btn.innerHTML)!==-1) 
        display.value = ""
    else if (btn.classList.contains("clear")) 
        display.value = ""
    else if (btn.classList.contains("delete")) 
        display.value = display.value.slice(0, -1)
    else if((oprts.indexOf(display.value.slice(-1)[0])!==-1 || display.value.slice(-1)[0]===".") && oprts.indexOf(btn.innerHTML)!==-1)
        display.value = display.value.slice(0, -1) + btn.innerHTML
    else display.value += btn.innerHTML
}

const handleEvent = e => {
    const selectedButton = Array.from(buttons).filter(btn => btn === e.target)[0]
    if (selectedButton && selectedButton.classList.contains('equal')) {
        const result = infixEval(display.value)
        display.value =  result===Math.floor(result) ? result: result.toFixed(4)
    }
    else if (selectedButton) handleInput(selectedButton)
}

const handleResult = e => {
    if (e.key === "Enter") {
        const result = infixEval(display.value)
        display.value =  result===Math.floor(result) ? result: result.toFixed(4)
    }
    document.querySelector("#display").focus()
}

const handleKeyUp = e => {
    const oprts = "-+*/^"
    const displayLast = display.value.slice(-2)[0]
    if(e.key.length===1 && e.key.match(/[a-zA-Z]/i)){
        display.value = display.value.slice(0,-1)
    } else if(e.key!=="Enter"){
        if((oprts.indexOf(displayLast)!==-1 || displayLast===".") && oprts.indexOf(e.key)!==-1){
            display.value = display.value.slice(0, -2) + e.key
            return
        }
    }
}

document.addEventListener('click', handleEvent)
document.addEventListener('keypress', handleResult)
display.addEventListener('keyup', handleKeyUp)