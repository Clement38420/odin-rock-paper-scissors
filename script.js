function randomMove() {
    let randomNumber = Math.floor(Math.random() * 10) % 3
    switch (randomNumber) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
    }
}

function getHumanChoice() {
    return prompt("Please choose a move :")
}