const rockBtn = document.querySelector("button.rock");
const paperBtn = document.querySelector("button.paper");
const scissorsBtn = document.querySelector("button.scissors");
const scoreDiv = document.querySelector(".score");

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

function playRound(computerChoice, humanChoice) {
    //This function return -1 if computer wins, 0 if ex-aequo, 1 if human wins
    switch (humanChoice) {
        case "rock":
            if (computerChoice === "paper") computerScore += 1;
            else if (computerChoice === "scissors") humanScore += 1;
            break;

        case "scissors":
            if (computerChoice === "scissors") computerScore += 1;
            else if (computerChoice === "rock") humanScore += 1;
            break;

        case "paper":
            if (computerChoice === "rock") computerScore += 1;
            else if (computerChoice === "paper") humanScore += 1;
            break;
    }

    updateScoreDiv();
}

rockBtn.addEventListener("click", () => {
    const computerChoice = randomMove();
    playRound(computerChoice, "rock");
})

paperBtn.addEventListener("click", () => {
    const computerChoice = randomMove();
    playRound(computerChoice, "paper");
})

scissorsBtn.addEventListener("click", () => {
    const computerChoice = randomMove();
    playRound(computerChoice, "scissors");
})

function updateScoreDiv() {
    scoreDiv.textContent = `You ${humanScore} - ${computerScore} Computer`;

    if (computerScore === 5) {
        alert("Computer won!");
        resetGame();
    }
    if (humanScore === 5) {
        alert("You won!");
        resetGame();
    }
}

function resetGame() {
    computerScore = 0;
    humanScore = 0;
    updateScoreDiv();
}