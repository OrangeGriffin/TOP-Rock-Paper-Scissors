function getComputerChoice() {
    // Return a random number from 1 to 3, which will then be assigned
    // to a rock, paper, or scissors value
    const computerChoice = Math.floor(Math.random() * 3) +1 
    if (computerChoice === 1) {
        return 'Rock'
    } else if (computerChoice === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}
