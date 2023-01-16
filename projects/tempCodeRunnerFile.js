const vinita = () => {
    function sum(a, b) {
        return a + b;
    }
    function sub(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }
    function div(a, b) {
        return a / b;
    }


    while (true) {
        let num1 = parseInt(prompt("Enter num1:"));
        let num2 = parseInt(prompt("Enter num2"));
        if (isNaN(num1) || isNaN(num2)) {
            console.log("Invalid Input Try Again with Numbers!!!");
            continue;
        }
        let Opt = prompt("Enter Operator: ");
        if (Opt == "+") {
            console.log(sum(num1, num2));
        }
        else if (Opt == "-") {
            console.log(sub(num1, num2));
        }
        else if (Opt == "*") {
            console.log(mul(num1, num2));
        }
        else if(Opt == "/")
        {
            console.log(div(num1, num2));
        }
        else{
            break;
        }
    }
}