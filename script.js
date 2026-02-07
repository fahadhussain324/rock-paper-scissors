'use strict';

// create a score counter for each
let humanScore = 0;
let computerScore = 0;
let r = 0;

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
function getHumanChoice(roundNumber) {
  let humanChoice = prompt(`Round: ${roundNumber}. Your score: ${humanScore}, Computer's score: ${computerScore}. Please pick rock, paper or scissors: `)
  return humanChoice;
}

//use the functions above to assign the value to their choice variables


function playRound(humanChoice, computerChoice) {
  const winner = `You Win! ${humanChoice} beats ${computerChoice}!`
  const loser = `You Lose! ${computerChoice} beats ${humanChoice}`
  if (humanChoice === computerChoice) {
    console.log("You both played the same. Try again!");
    return "tie";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log(winner);
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log(winner);
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log(winner);
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  } else {
    console.log(loser);
    computerScore++;
    console.log(`Your score: ${humanScore}, Computer's score: ${computerScore}`);
  }
  return "played";
}

function playGame() {
  let roundsPlayed = 0;
  let roundNumber = 1;

  while (roundsPlayed < 5) {
    const humanChoice = getHumanChoice(roundNumber).toLowerCase();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
  if
  (result === "played")
  roundsPlayed++;
  roundNumber++;
  }
}
playGame()
if (humanScore > computerScore) {
    console.log("Congrats! You Win the game!")
    console.log(`Final scores - Your score: ${humanScore}, Computer's score: ${computerScore}`) }
    else if (computerScore > humanScore) {
      console.log("Sorry! You Lose the game!")
      console.log(`Final scores - Your score: ${humanScore}, Computer's score: ${computerScore}`) }
    else if (humanScore === computerScore) {
      console.log("You drew the game!")
      console.log(`Final scores - Your score: ${humanScore}, Computer's score: ${computerScore}`)
      }
    else {"Unable to determine winner!"}