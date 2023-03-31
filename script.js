// set global variables for win count
let playerWinCount = 0;
let computerWinCount = 0;
let playClickCount = 0;

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

function game() {
  // Per project instructions, removing the logic which plays exactly five rounds
  /*   for (let round = 1; round < 6; round++) {
    console.log(playRound(playerWinCount, computerWinCount));
  }

  if (playerWinCount > computerWinCount) {
    console.log(`You win: ${playerWinCount} to ${computerWinCount}`);
  } else if (playerWinCount < computerWinCount) {
    console.log(`You lose: ${playerWinCount} to ${computerWinCount}`);
  } else {
    console.log("Tie");
  } */
}

game();

// Beging DOM / UI Updates
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playClickCount++;
    const playerChoice = button.innerHTML;
    if (playClickCount === 1) {
      beginGame();
    }
  });
});

const beginGame = function () {
  // Display Scoreboard header on first "play"
  const scoreHeader = document.querySelector(".scoreboard-header");
  scoreHeader.innerText = "Scoreboard";


  // Display score headers
  const playerScoreHeader = document.querySelector(".player-score-header");
  const cpuScoreHeader = document.querySelector(".cpu-score-header")
  playerScoreHeader.innerText = "You";
  cpuScoreHeader.innerText = "CPU";

  // Display scores
  const playerScore = document.querySelector(".player-score-tracker");
  const playerScoreTracker = `${playerWinCount}`;
  playerScore.innerText = playerScoreTracker;

  const cpuScore = document.querySelector(".cpu-score-tracker");
  const cpuScoreTracker = `${computerWinCount}`;
  cpuScore.innerText = cpuScoreTracker
};
