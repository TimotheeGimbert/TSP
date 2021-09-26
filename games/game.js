///////////////
// VARIABLES //
///////////////

const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;

const startButton = document.getElementById('startButton');
const rockButton = document.getElementById('rockButton');
const paperButton = document.getElementById('paperButton');
const scissorsButton = document.getElementById('scissorsButton');

const gameScreen = document.getElementById('gameScreen');

///////////////
// FUNCTIONS //
///////////////

function logInfo(stringInfo) {
    console.log(stringInfo);
    let para = document.createElement('p');
    para.innerHTML = stringInfo;
    gameScreen.appendChild(para);
}

function initScores() { // sets both scores to zero
    playerScore = 0;
    computerScore = 0;
    while (gameScreen.firstChild) gameScreen.removeChild(gameScreen.firstChild);
    logInfo("PLAYER SCORE = 0 | COMPUTER SCORE = 0");
}

function getComputerChoice() { // randomly returns an element from array choices
    const randomInt = Math.floor(Math.random() * 3);
    let choice = choices[randomInt];
    choice = choice.toUpperCase();
    return choice;
}

function playRound(playerChoice) {
    while (gameScreen.firstChild) gameScreen.removeChild(gameScreen.firstChild);
    let computerChoice = getComputerChoice();
    let roundWinner = getWinner(playerChoice, computerChoice); 
    upScore(roundWinner);
    logInfo(`You have chosen ${playerChoice}, and computer has chosen ${computerChoice}.`);
    logInfo(`WINNER : ${roundWinner}`);
    logInfo(`Your total score is ${playerScore}, and computer score is ${computerScore}`);
}

function getWinner(playerChoice, computerChoice) { // returns "player" "computer" or "nobody"
    if (playerChoice === "ROCK") {
        if (computerChoice === "SCISSORS") return "player";
        else if (computerChoice === "PAPER") return "computer";
        else return "nobody";
    }
    else if (playerChoice === "PAPER") {
        if (computerChoice === "ROCK") return "player";
        else if (computerChoice === "SCISSORS") return "computer";
        else return "nobody";
    }
    else if (playerChoice === "SCISSORS") {
        if (computerChoice === "PAPER") return "player";
        else if (computerChoice === "ROCK") return "computer";
        else return "nobody";
    }
}

function upScore(winner){
    if (winner === "player") playerScore += 1;
    else if (winner === "computer") computerScore += 1;
    else return; 
}
////////////////////
// MAIN EXECUTION //
////////////////////

startButton.addEventListener('click', () => { initScores(); } );

rockButton.addEventListener('click', () => { playRound("ROCK"); } );
paperButton.addEventListener('click',  () => { playRound("PAPER"); } );
scissorsButton.addEventListener('click',  () => { playRound("SCISSORS"); } );

