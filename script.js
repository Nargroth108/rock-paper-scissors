let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];;
    return choices[Math.floor(Math.random() * choices.length)];
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        document.querySelector('.results').textContent = "Tie! Play another round"
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        document.querySelector('.results').textContent = `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        document.querySelector('.results').textContent = `You won, ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        document.querySelector('.results').textContent = `You won, ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        document.querySelector('.results').textContent = `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        document.querySelector('.results').textContent = `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        document.querySelector('.results').textContent = `You won, ${playerSelection} beats ${computerSelection}!`
    } else {
        document.querySelector('.results').textContent = "Typo?"
    }
};

const rock = document.getElementById('rock');
rock.addEventListener('click', function() {playRound('rock', getComputerChoice())});

const paper = document.getElementById('paper');
paper.addEventListener('click', function() {playRound('paper', getComputerChoice())});

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', function() {playRound('scissors', getComputerChoice())});