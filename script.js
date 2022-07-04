let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (user, computer, target) => {
    let userDiff = Math.abs(user - target);
    let computerDiff = Math.abs(computer - target);
    if (userDiff <= computerDiff){
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    } else {
        console.log("error");
    }
}

const advanceRound = () => {
    currentRoundNumber += 1;
}