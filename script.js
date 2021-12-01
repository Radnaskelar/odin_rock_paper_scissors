// computer chooses from array

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
    if (playerChoice == '') { alert('No input!');
    }
    return playerChoice.toLowerCase();
}

// single round takes two parameters which have values of function expressions

const gameRound = function (playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        return 'Player wins!';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'Player loses!';
    } else {
        return 'Draw!';
    }
}
let playerSelection = playerPlay();
let computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));