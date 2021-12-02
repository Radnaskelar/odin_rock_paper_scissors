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

const playerPlay = () => {
    let playerChoice = prompt('Type your choice: rock, paper or scissors', '');
    if (playerChoice == '') {
        alert('No input!');
    }
    return playerChoice.toLowerCase();
}

// single round takes two parameters which have values of function expressions
// an if else conditional is used to check and compare player and computer values

const gameRound = function (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Player wins! Rock beats scissors!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Player wins! Paper beats rock!';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Player wins! Scissors beat paper!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Player loses! Paper beats rock!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Player loses! Scissors beat paper!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Player loses! Rock beats scissors!';
    } else if (playerSelection === computerSelection) {
        return 'Tie!';
    } else {
        return 'Invalid input!';
    }
}
let playerSelection = playerPlay();
let computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));