const messages = require('./messages.json');
const readline = require('readline-sync');
const { prompt } = require('./utils');
const { totalCardsValue } = require('./gameLogic');
const { TARGET_WINS } = require('./constants');

function displayWelcome() {
  prompt(messages.welcome);
  prompt(messages.winningRule.replace('%{targetWins}', TARGET_WINS));
  console.log();
}

function retrieveHitOrStay() {
  prompt(messages.hitOrStay);
  let response = readline.question().trim().toLowerCase();
  while (!['hit', 'stay', 'h', 's'].includes(response)) {
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

function displayPlayersCards(playerCards, dealerCards) {
  console.log('===========');
  prompt(`Player has ${playerCards} for a total of ${totalCardsValue(playerCards)}`);
  prompt(`Dealer has ${dealerCards} for a total of ${totalCardsValue(dealerCards)}`);
  console.log('===========');
}

function displayScore(score) {
  prompt(`Score: Player: ${score.player}, Dealer: ${score.dealer}`);
}

function displayGrandWinner(grandWinner) {
  prompt(`${grandWinner} is the grand winner!`);
}

function continueToNextRound() {
  while (true) {
    const response = readline
      .question(messages.continueToNextRound)
      .trim()
      .toLowerCase();
    if (response === 'y') return true;
    prompt(messages.invalidInput);
  }
}

module.exports = {
  displayWelcome,
  retrieveHitOrStay,
  displayWinner,
  displayPlayAgain,
  playAgain,
  displayPlayersCards,
  displayScore,
  displayGrandWinner,
  continueToNextRound
};