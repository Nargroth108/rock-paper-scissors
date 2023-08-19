function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];;
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection) {
    let playerScore = document.querySelector('.playerScore');
    let computerScore = document.querySelector('.computerScore');
    let results =  document.querySelector('.results');
    if (playerSelection === computerSelection) {
        results.textContent = "Tie! Play another round"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        results.textContent = `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        results.textContent = `You won, ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        results.textContent = `You won, ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        results.textContent = `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
        results.textContent = `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
        results.textContent = `You won, ${playerSelection} beats ${computerSelection}!`
    } else {
        results.textContent = "Typo?"
    };

    if (playerScore.textContent === '5') {
        results.textContent = "Congratulations! You won the game :)";
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = true;
        });
    } else if (computerScore.textContent === '5') {
        results.textContent = 'Sadly you lost this game... Good luck next time!';
        document.querySelectorAll('button.btn').forEach(elem => {
            elem.disabled = true;
        });
    }
};

const rock = document.getElementById('rock');
rock.addEventListener('click', function() {playRound('rock', getComputerChoice())});

const paper = document.getElementById('paper');
paper.addEventListener('click', function() {playRound('paper', getComputerChoice())});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {playRound('scissors', getComputerChoice())});