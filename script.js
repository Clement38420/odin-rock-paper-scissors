let humanScore = 0
let computerScore = 0

function randomMove() {
    let randomNumber = Math.floor(Math.random() * 10) % 3
    switch (randomNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Please choose a move :").toLowerCase()
}

function playRound(computerChoice, humanChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") return "Ex-aequo"
            else if (computerChoice == "scissors") return `You Win ${humanChoice} beats ${computerChoice}!`
            else return `You Lose ${computerChoice} beats ${humanChoice}!`
        case "scissors":
            if (computerChoice == "scissors") return "Ex-aequo"
            else if (computerChoice == "paper") return `You Win ${humanChoice} beats ${computerChoice}!`
            else return `You Lose ${computerChoice} beats ${humanChoice}!`
        case "paper":
            if (computerChoice == "paper") return "Ex-aequo"
            else if (computerChoice == "rock") return `You Win ${humanChoice} beats ${computerChoice}!`
            else return `You Lose ${computerChoice} beats ${humanChoice}!`
        default:
            return "Please enter a valid move"
    }
}

console.log(playRound(randomMove(), getHumanChoice()))