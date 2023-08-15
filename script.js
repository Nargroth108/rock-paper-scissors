let playerScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];;
    return choices[Math.floor(Math.random() * choices.length)];
};

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie! Play another round"
    } else if (playerSelection ===  'rock' && computerSelection === 'paper') {
        computerScore++
        return `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection ===  'rock' && computerSelection === 'scissors') {
        playerScore++
        return `You won, ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection ===  'paper' && computerSelection === 'rock') {
        playerScore++
        return `You won, ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection ===  'paper' && computerSelection === 'scissors') {
        computerScore++
        return `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection ===  'scissors' && computerSelection === 'rock') {
        computerScore++
        return `You lost, ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection ===  'scissors' && computerSelection === 'paper') {
        playerScore++
        return `You won, ${playerSelection} beats ${computerSelection}!`
    } else {
        return "Typo?"
    }
}
const playerSelection = prompt('type').toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

