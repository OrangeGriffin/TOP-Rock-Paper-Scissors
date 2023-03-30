// set global variables for win count
let playerWinCount = 0;
let computerWinCount = 0;

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

// Provide prompt for user to enter a choice. Convert entry to all lowercase.
function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, or Scissors?");
  playerChoice = playerChoice.toLocaleLowerCase();
  return playerChoice;
}

function playRound() {
  playerSelection = getPlayerChoice();
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
        return "You lose :( Paper covers Rock";
      } else if (computerSelection === "scissors") {
        return "You win! Rock crushes scissors.";
      } else {
        return "This is a tie. You both chose Rock";
      }
      break;
    case "scissors":
      if (computerSelection === "paper") {
        return "You win! Scissors cuts paper";
      } else if (computerSelection === "rock") {
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
