const computerPlay = () => {
    const gameArray = ['rock', 'paper', 'scissors'];
    let selector = Math.floor(Math.random() * gameArray.length);
    switch (selector) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
    }
}

let playerScore = 0;
let computerScore = 0;
let round = 0;

const gameHeader = document.createElement('h2');
gameHeader.textContent = 'Choose to start the game!';

const div = document.createElement('div');
document.body.appendChild(div);
div.style.border = '2px solid orange';
div.style.backgroundColor = 'gold';
div.classList.add('display');

div.appendChild(gameHeader);

const para = document.createElement('p');
div.appendChild(para);
para.style.textAlign = 'center';
para.style.fontSize = '20px';

const score = document.createElement('p');
div.appendChild(score);
score.style.textAlign = 'center';
score.style.fontSize = '20px';

const gameReset = () => {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        round = 0;
        para.textContent = 'Click on a choice to play again!';
        gameHeader.style.display = 'inline';
        gameHeader.textContent = 'Play again?';
    }
}

const declareWinner = () => {
    if (playerScore === 5) {
        alert('Player wins!');
    } else if (computerScore === 5) {
        alert('Player loses!');
    }
}

const playRound = function (e, computerSelection = computerPlay()) {
    playerSelection = e.target.textContent.toLowerCase();
    gameHeader.style.display = 'none';
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        if (playerScore < 5) {
            playerScore++;
            round++;
            para.textContent = ('Player wins! Rock beats scissors!');
            score.textContent = `Player score: ${playerScore}` + ', ' + `Computer score: ${computerScore}` + ', ' + `Round: ${round}`;
        } else {
            return;
        }
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        if (playerScore < 5) {
            playerScore++;
            round++;
            para.textContent = ('Player wins! Paper beats rock!');
            score.textContent = `Player score: ${playerScore}` + ', ' + `Computer score: ${computerScore}` + ', ' + `Round: ${round}`;
        } else {
            return;
        }
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        if (playerScore < 5) {
            playerScore++;
            round++;
            para.textContent = ('Player wins! Scissors beat paper!');
            score.textContent = `Player score: ${playerScore}` + ', ' + `Computer score: ${computerScore}` + ', ' + `Round: ${round}`;
        } else {
            return;
        }
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        if (computerScore < 5) {
            computerScore++;
            round++;
            para.textContent = ('Player loses! Paper beats rock!');
        } else {
            return;
        }
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        if (computerScore < 5) {
            computerScore++;
            round++;
            para.textContent = ('Player loses! Scissors beat paper!');
            score.textContent = `Player score: ${playerScore}` + ', ' + `Computer score: ${computerScore}` + ', ' + `Round: ${round}`;
        } else {
            return;
        }
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        if (computerScore < 5) {
            computerScore++;
            round++;
            para.textContent = ('Player loses! Rock beats scissors!');
            score.textContent = `Player score: ${playerScore}` + ', ' + `Computer score: ${computerScore}` + ', ' + `Round: ${round}`;
        } else {
            return;
        }
    } else if (playerSelection === computerSelection) {
        round++;
        para.textContent = ('Tie!');
        score.textContent = `Player score: ${playerScore}` + ', ' + `Computer score: ${computerScore}` + ', ' + `Round: ${round}`;
        return;
    }
    declareWinner();
    gameReset();
}

//adding buttons to html using dom

let buttonCount = 3;
for (let i = 0; i < buttonCount; i++) {
    const button = document.createElement('button');
    document.body.appendChild(button);
}

//adding text content to each button via switch statement

const buttonDiv = document.createElement('div');
document.body.appendChild(buttonDiv);
buttonDiv.classList.add('buttons');
buttonDiv.style.border = '2px solid green';

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    switch (button) {
        case buttons[0]:
            button.textContent = 'Rock';
            break;

        case buttons[1]:
            button.textContent = 'Paper';
            break;

        case buttons[2]:
            button.textContent = 'Scissors';
            break;
    }
    button.addEventListener('click', playRound);
    buttonDiv.appendChild(button);
});

const mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.setAttribute('id', 'game');
mainDiv.appendChild(div);
mainDiv.appendChild(buttonDiv);






