const computerPlay = function () {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) return "rock";
  else if (choice === 2) return "paper";
  else return "scissors";
};

let compScore = 0;
let yourScore = 0;

// const computerSelection = computerPlay();
let playRound = function (playerSeletion, computerSelection) {
  let ps = playerSeletion.toLowerCase();
  if (ps === "rock" && computerSelection === "scissors") {
    {
      yourScore++;
      return "You win this round! Rock beats Scissors";
    }
  } else if (ps === "rock" && computerSelection === "paper") {
    compScore++;
    return "You lose this round! Paper beats Rock";
  } else if (ps === "paper" && computerSelection === "scissors") {
    compScore++;
    return "You lose this round! Scissor beats Paper";
  } else if (ps === "paper" && computerSelection === "rock") {
    yourScore++;
    return "You win this round! Paper beats rock";
  } else if (ps == "scissors" && computerSelection === "paper") {
    yourScore++;
    return "You win this round! Scissor beats Paper";
  } else if (ps === "scissors" && computerSelection === "rock") {
    compScore++;
    return "You lose round! Rock beats Scissors";
  } else if (ps === computerSelection) {
    return "It's a tie this round";
  }
};

let game = function () {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    console.log(playRound(prompt("Rock, Paper, or Scissors?"), computerPlay()));
    console.log(`Your score: ${yourScore} | Computer score: ${compScore}`);
  }
  if (yourScore > compScore) console.log("You are the Winner!");
  else if (compScore > yourScore) console.log("You lost the game!");
  else console.log("It's a tie game!");
};

game();
