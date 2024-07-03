let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector('#userScore')
const compScorePara = document.querySelector('#comScore')

const genComChoice =() => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx] 
}

const drawGame = () => {
    console.log("game was draw.")
    msg.innerText ='Game was draw'
    msg.style.backgroundColor = '#081b31'
}
const showWinner = (userWin) => {
    if(userWin){
        console.log("you win");
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText ='You win.'
        msg.style.backgroundColor = 'green'
    }else{
        console.log("you lose.")
        comScore++;
        compScorePara.innerText = comScore
        msg.innerText ='You lose.'
        msg.style.backgroundColor = 'red'
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice)
    //Geneate computer choice
    const compChoice = genComChoice();
    console.log("computer choice = ",compChoice)

    if (userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==='rock'){
            userWin = compChoice === 'paper'?false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }else{
            userWin = compChoice === 'rock' ? false: true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})