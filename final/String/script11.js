// nested If else 
let winningNumber  = 18;
let userGuess = +prompt("Guess a number"); //+ makes the value string to number;
console.log(userGuess, typeof userGuess);

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("Too low!!");
    }else{
        console.log("too high");
    }
}
