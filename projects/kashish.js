function guessnumber(){
    let randomNumber = Math.ceil(Math.random() * 10);
    let number
    let tries=0
    while (number !== randomNumber && tries<3) {
        number = parseInt(prompt("Guess a number between 1 and 10:"));
        if (number === randomNumber) {
            alert("You guessed it! The number was " + randomNumber + ".");
            break;
        } else if (number > randomNumber) {
            alert("Too high! Try again.");
        } else if (number < randomNumber) {
            alert("Too low! Try again.");
        }
        tries++
    }  
    console.log("You tried "+tries+" times")
}