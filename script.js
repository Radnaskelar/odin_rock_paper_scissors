// declare computer's choices
// computer chooses
const gameArray = ['Rock', 'Paper', 'Scissors'];
function computerPlay() {
    const random = Math.floor(Math.random() * gameArray.length);
    switch (random) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

// round played by comparing computer's random choice and player's input

function playRound(playerSelection, computerSelection) {
    let message = '';
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper'))
    { message = "You win!" }
    else if ((playerSelection === 'Rock' && computerSelection === 'Paper') || (playerSelection === 'Paper' && computerSelection === 'Scissors') || (playerSelection === 'Scissors' && computerSelection === 'Rock'))
    { message = "You lose!" }
    else ((playerSelection === 'Rock' && computerSelection === 'Rock') || (playerSelection === 'Paper' && computerSelection === 'Paper') || (playerSelection === 'Scissors' && computerSelection === 'Scissors'))
    { message = "Tie!" }
    return message;
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));


function playerPlay() {
    const playerChoice = prompt("Select your choice: rock, paper or scissors");
    return playerChoice.toLowerCase();
}