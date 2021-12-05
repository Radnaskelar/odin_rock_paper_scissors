// computer chooses from array, returned value is number
// convert to string via switch()
//

const computerPlay = () => {
    const gameArray = ['rock', 'paper', 'scissors'];
    let selector = Math.floor(Math.random() * gameArray.length);
    switch (selector) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

// player inputs choice via prompt
// alert pops up if there is no input
// .toLowerCase() method used for disabling case sensitivity

const playerPlay = () => {
    let playerChoice = prompt('Type your choice: rock, paper or scissors', '');
    if (playerChoice == '') {
        alert('No input!');
    }
    return playerChoice.toLowerCase();
}

// single round takes two parameters which have values of function expressions
// an if else conditional is used to check and compare player and computer values
// returns string declaring win, loss or tie

//let playerSelection = playerPlay();
//let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;

const gameRound = function (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log('Player wins! Rock beats scissors!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log('Player wins! Paper beats rock!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log('Player wins! Scissors beat paper!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log('Player loses! Paper beats rock!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log('Player loses! Scissors beat paper!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log('Player loses! Rock beats scissors!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else if (playerSelection === computerSelection) {
        console.log('Tie!' + ' ' + `player: ${playerScore}, computer: ${computerScore}`);
        return playerScore, computerScore;
    } else {
        return 'Invalid input!';
    }
}

// game function runs gameRound five times
// keeps score with two variables for player and computer respectively
// returns message who won

const game = () => {
    let result;

    gameRound(playerPlay(), computerPlay());
    gameRound(playerPlay(), computerPlay());
    gameRound(playerPlay(), computerPlay());
    gameRound(playerPlay(), computerPlay());
    gameRound(playerPlay(), computerPlay());

    if (playerScore > computerScore) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }
    console.log(result);
};

//test run and console log one round

//game();
//console.log(gameRound(playerPlay(), computerPlay());
