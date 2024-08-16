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
    //This function return -1 if computer wins, 0 if ex-aequo, 1 if human wins
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "rock") return 0
            else if (computerChoice == "scissors") return 1
            else return -1
        case "scissors":
            if (computerChoice == "scissors") return 0
            else if (computerChoice == "paper") return 1
            else return -1
        case "paper":
            if (computerChoice == "paper") return 0
            else if (computerChoice == "rock") return 1
            else return -1
    }
}

function playGame(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        let computerChoice = randomMove()
        let humanChoice = getHumanChoice()
        let result = playRound(computerChoice, humanChoice)

        if (result < 0) {
            console.log(`You Lose ${computerChoice} beats ${humanChoice}!`)
            computerScore++
        } else if (result > 0) {
            console.log(`You Win ${humanChoice} beats ${computerChoice}!`)
            humanScore++
        } else {
            console.log("Ex-aequo")
        }
    }

    console.log(`The final score is Human ${humanScore} - ${computerScore} Computer`)
}