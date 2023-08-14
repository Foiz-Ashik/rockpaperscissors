const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection.toLowerCase()) {
        resultText.textContent = "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        resultText.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreDisplay.textContent = `Player: ${playerScore}`;
    } else {
        resultText.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerScoreDisplay.textContent = `Computer: ${computerScore}`;
    }

    if (playerScore === 5) {
        resultText.textContent = "Congratulations! You win the game!";
    } else if (computerScore === 5) {
        resultText.textContent = "Sorry, you lose the game.";
    }
}

const choiceButtons = document.querySelectorAll('.choice');
choiceButtons.forEach(button => {
    button.addEventListener('click', function() {
        playRound(button.getAttribute('data-choice'));
    });
});
