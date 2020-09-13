const messages = require('../messages.json');
const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function retrieveHitOrStay() {
  prompt(messages.hitOrStay);
  let response = readline.question().trim().toLowerCase();
  while (!['hit', 'stay'].includes(response)) {
    prompt(messages.invalidInput);
    response = readline.question().trim().toLowerCase();
  }
  return response;
}

function displayWinner(winner) {
  if (winner) {
    prompt(`${winner} wins!`);
  } else {
    prompt(messages.tie);
  }
}

function displayPlayAgain() {
  prompt('-------------------');
  prompt(messages.playAgain);
}

function playAgain() {
  while (true) {
    const response = readline.question().trim().toLowerCase();
    if (response === 'y') return true;
    if (response === 'n') return false;
    prompt(messages.invalidInput);
  }
}

module.exports = {
  prompt,
  retrieveHitOrStay,
  displayWinner,
  displayPlayAgain,
  playAgain
};