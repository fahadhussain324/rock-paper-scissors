'use strict';
// get computer choice using math.random
function getComputerChoice() {
  let choice = Math.random()
    if (choice <= 0.33) {
      return "rock"
  }
    else if (choice <= 0.66) {
      return "paper"
    }
    else
    return "scissors"
}

// get human choice, assuming they've typed one of the options correctly
function getHumanChoice() {
  let humanChoice = prompt("Please pick rock, paper or scissors: ")
  return humanChoice
}

//use the functions above to assign the value to their choice variables
const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice().toLowerCase();

// create a score counter for each
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  const winner = `You Win! ${humanChoice} beats ${computerChoice}!`
  const loser = `You Lose! ${computerChoice} beats ${humanChoice}`
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(winner);
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(winner);
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(winner);
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  }
  else {
    console.log(loser);
    computerScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);

  }

}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (r = 0; r < 5; r++) {
    playRound(humanChoice, computerChoice)
    console.log(r)
  }
}
