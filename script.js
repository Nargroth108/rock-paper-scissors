const choices = ['rock', 'paper', 'scissors'];
const playerScore = 0
const computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

console.log(getComputerChoice());

