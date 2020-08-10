const readline = require('readline-sync');

const TARGET_WINS = 5;
const PLAYER = 'player';
const COMPUTER = 'computer';

const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const LIZARD = 'lizard';
const SPOCK = 'spock';
const VALID_CHOICES = [ROCK, PAPER, SCISSORS, LIZARD, SPOCK];

const WINNING_COMBOS = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['paper', 'spock'],
  spock: ['rock', 'scissors'],
};

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

function displayWinner(winner) {
  if (winner === PLAYER) {
    prompt('You win!');
  } else if (winner === COMPUTER) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function displayScore(score) {
  console.log(`Your wins: ${score[PLAYER]}. Computer wins: ${score[COMPUTER]}`);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getChoice() {
  prompt(`Choose one: ${[...VALID_CHOICES]}. You don't have to type the entire word`);
  while (true) {
    let input = readline.question();
    input = input.toLowerCase();
    const validChoices = VALID_CHOICES.filter(validChoice => {
      const regExp = new RegExp(`^${input}`);
      return regExp.test(validChoice);
    });

    if (validChoices.length === 1) {
      return validChoices[0];
    } else {
      prompt('Invalid choice. Please try again');
    }
  }
}

function getWinner(choice, computerChoice) {
  if (choice === computerChoice) {
    return null;
  } else if (playerWins(choice, computerChoice)) {
    return PLAYER;
  } else {
    return COMPUTER;
  }
}

function incrementWinCount(score, winner) {
  score[winner] += 1;
}

function isGameEnded(score) {
  return score[PLAYER] === TARGET_WINS || score[COMPUTER] === TARGET_WINS;
}

function displayGrandWinner(winner) {
  if (winner === PLAYER) {
    prompt('You are the grand winner!');
  } else if (winner === COMPUTER) {
    prompt('Computer is the grand winner!');
  }
}

function resetScores(score) {
  score[PLAYER] = 0;
  score[COMPUTER] = 0;
}

function getComputerChoice() {
  const randomIdx = Math.round(Math.random() * (VALID_CHOICES.length - 1));
  return VALID_CHOICES[randomIdx];
}

let playing = true;
const score = {[PLAYER]: 0, [COMPUTER]: 0};
while (playing) {
  displayScore(score);

  const choice = getChoice();
  const computerChoice = getComputerChoice();

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);
  const winner = getWinner(choice, computerChoice);
  displayWinner(winner);
  incrementWinCount(score, winner);

  if (isGameEnded(score)) {
    displayGrandWinner(winner);
    console.log('Continue playing? yes to continue or any other key to exit');
    const answer = readline.question();
    if (answer.toLowerCase() === 'yes') {
      resetScores(score);
      console.clear();
    } else {
      playing = false;
    }
  }
}