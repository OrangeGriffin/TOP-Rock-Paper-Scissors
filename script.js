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

function playRound(playerSelection, computerSelection) {
  playerSelection = getPlayerChoice();
  computerSelection = getComputerChoice();

  //console.log(`You chose ${playerSelection}. Computer chose ${computerSelection}.`)

  switch (playerSelection) {
    case "paper":
      if (computerSelection === "paper") {
        return "This is a tie. You both chose Paper.";
      } else if (computerSelection === "scissors") {
        return "You lose :( Scissors cuts Paper";
      } else {
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
  return playRound()
}

console.log(game())