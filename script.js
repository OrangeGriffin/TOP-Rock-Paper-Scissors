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
  return playerChoice
}
