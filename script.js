"use strict";

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let btn = document.getElementsByTagName("button");
let yourScore = 0;
let compScore = 0;
let round = 0;
let container = document.querySelector(".container");
container.style.color = "green";
let content = document.createElement("div");

content.textContent = "Let's play some 🪨 - 📄 - ✂️ :)! ";
content.style.fontSize = "20px";
content.style.fontWeight = "bold";
content.style.border = "solid";
content.style.backgroundColor = "white";
content.style.width = "460px";
content.style.height = "140px";
content.style.marginLeft = "auto";
content.style.marginRight = "auto";

let showRound = document.createElement("h3");
showRound.textContent = "Round Number will appear here.";
let choices = document.createElement("h3");
choices.textContent = "Selections will appear here.";
let roundResult = document.createElement("h3");
roundResult.textContent = "The Scoreboard will appear here. Good Luck! 🍀";
let victor = document.createElement("h2");
victor.textContent = "";
victor.style.color = "green";
// victor.textContent = "The winner should show here";
content.appendChild(showRound);
content.appendChild(choices);
content.appendChild(roundResult);
content.appendChild(victor);
container.appendChild(content);

const computerPlay = function () {
  let choice = Math.floor(Math.random() * 3 + 1);
  if (choice === 1) return "rock";
  else if (choice === 2) return "paper";
  else return "scissors";
};

function playRound(player1, bot) {
  if (player1 === "rock" && bot === "scissors") {
    yourScore++;
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = `You chose ${player1} and the bot chose ${bot}`;
    return (roundResult.textContent = `Your score: ${yourScore} | Bot's score: ${compScore}`);
  } else if (player1 === "rock" && bot === "paper") {
    compScore++;
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = `You chose ${player1} and the bot chose ${bot}`;
    return (roundResult.textContent = `Your score: ${yourScore} | Bot's score: ${compScore}`);
  } else if (player1 === "paper" && bot === "scissors") {
    compScore++;
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = `You chose ${player1} and the bot chose ${bot}`;
    return (roundResult.textContent = `Your score: ${yourScore} | Bot's score: ${compScore}`);
  } else if (player1 === "paper" && bot === "rock") {
    yourScore++;
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = `You chose ${player1} and the bot chose ${bot}`;
    return (roundResult.textContent = `Your score: ${yourScore} | Bot's score: ${compScore}`);
  } else if (player1 === "scissors" && bot === "paper") {
    yourScore++;
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = `You chose ${player1} and the bot chose ${bot}`;
    return (roundResult.textContent = `Your score: ${yourScore} | Bot's score: ${compScore}`);
  } else if (player1 === "scissors" && bot === "rock") {
    compScore++;
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = `You chose ${player1} and the bot chose ${bot}`;
    return (roundResult.textContent = `Your score: ${yourScore} | Bot's score ${compScore}`);
  } else {
    round++;
    showRound.textContent = `Round Number: ${round}`;
    choices.textContent = "You had the same selection as the bot!";
  }
  return (roundResult.textContent = `Your score: ${yourScore} | Bot's score: ${compScore}`);
}

rock.addEventListener("click", function () {
  playRound("rock", computerPlay());
});
paper.addEventListener("click", function () {
  playRound("paper", computerPlay());
});
scissors.addEventListener("click", function () {
  playRound("scissors", computerPlay());
});

container.addEventListener("click", function () {
  if (yourScore === 5 && compScore < yourScore) {
    victor.textContent = "You Win!! 🎉 🏆 😎 Click a button to play again!";
    setTimeout(function () {
      victor.textContent = "";
    }, 3000);
    round = 0;
    yourScore = 0;
    compScore = 0;
  } else if (compScore === 5 && compScore > yourScore) {
    victor.textContent = "Bot Wins! 🤖 🏆 Click a button to play again!";
    setTimeout(function () {
      victor.textContent = "";
    }, 3000);
    round = 0;
    yourScore = 0;
    compScore = 0;
  }
});
