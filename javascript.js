function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return "rock";
    }
    else if (randomNumber < 2 / 3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?");
    if (choice.toLowerCase() == "rock") {
        return "rock";
    }
    else if (choice.toLowerCase() == "paper") {
        return "paper";
    }
    else if (choice.toLowerCase() == "scissors") {
        return "scissors";
    }
    else {
        console.log("Invalid choice. Please try again");
        return getHumanChoice();
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock.");
        }
        else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore++;
            console.log("You win! Rock beats scissors.");
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats rock.");
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore++;
            console.log("You lose! Scissors beats paper.");
        }
        else if (humanChoice == "scissors" && computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats scissors.");
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper.");
        }
        else if (humanChoice == computerChoice) {
            console.log("It's a draw!");
        }
        else {
            console.log("Invalid input. Please try again.");
        }
    }

    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
        console.log("------------------------");
    }

    // Declare the winner
    console.log("Game Over!");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();