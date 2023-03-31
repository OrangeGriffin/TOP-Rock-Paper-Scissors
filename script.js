// set global variables for win count
let playerWinCount = 0;
let computerWinCount = 0;
let playClickCount = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playClickCount++;
    const playerChoice = button.innerHTML;
    if (playClickCount === 1) {
      game(playerChoice);
    }
  });
});

function getComputerChoice() {
  // Return a random number from 1 to 3, which will then be assigned
  // to a rock, paper, or scissors value
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  playerSelection = playerChoice;
  computerSelection = getComputerChoice();

  switch (playerSelection) {
    case "paper":
      if (computerSelection === "paper") {
        return "This is a tie. You both chose Paper.";
      } else if (computerSelection === "scissors") {
        computerWinCount++;
        return "You lose :( Scissors cuts Paper";
      } else {
        playerWinCount++;
        return "You win! Paper covers Rock";
      }
      break;
    case "rock":
      if (computerSelection === "paper") {
        computerWinCount++;
        return "You lose :( Paper covers Rock";
      } else if (computerSelection === "scissors") {
        playerWinCount++;
        return "You win! Rock crushes scissors.";
      } else {
        return "This is a tie. You both chose Rock";
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        playerWinCount++;
        return "You win! Scissors cuts paper";
      } else if (computerSelection === "rock") {
        computerWinCount++;
        return "You lose :( Rock crushes scissors.";
      } else {
        return "This is a tie. You both chose Scissors";
      }
      break;
    default:
      return "HUH?";
  }
}

function game(playerChoice) {
  if (playClickCount === 1) {
    newGame();
    playRound(playerChoice);
    while (playerWinCount < 5 && computerWinCount < 5) {
      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          playClickCount++;
          const playerChoice = button.innerHTML;
          if (playClickCount === 1) {
            game(playerChoice);
          }
        });
      });
      playRound(playerChoice);
    }
  }
}

// When a new game begins, display scoreboard
function newGame() {
  // Display text at header
  const scoreboardHeader = document.querySelector(".scoreboard-header");
  scoreboardHeader.innerText = "Scoreboard";

  const playerHeader = document.querySelector(".player-score-header");
  playerHeader.innerText = "Player";

  const cpuHeader = document.querySelector(".cpu-score-header");
  cpuHeader.innerText = "CPU";
}
