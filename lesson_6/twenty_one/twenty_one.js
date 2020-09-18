const { DEALER_HIT_UNTIL_TARGET } = require("./constants");
const messages = require('./messages.json');
const { prompt } = require('./utils');
const {
  retrieveHitOrStay,
  displayWinner,
  playAgain,
  displayPlayersCards,
  displayWelcome,
  displayScore,
  displayGrandWinner,
  continueToNextRound
} = require('./io');
const {
  getShuffledCards,
  distributeCards,
  drawCard,
  busted,
  getWinner,
  cardFaces,
  totalCardsValue,
  grandWinner
} = require('./gameLogic');


while (true) {
  const score = { player: 0, dealer: 0 };
  displayWelcome();
  while (true) {
    console.clear();

    const playerCards = [];
    const dealerCards = [];
    const deckOfCards = getShuffledCards();
    distributeCards(deckOfCards, playerCards, dealerCards);

    displayScore(score);
    prompt(`Dealer has ${dealerCards[0][1]} and unknown card`);
    prompt(`You have ${playerCards[0][1]} and ${playerCards[1][1]} for a total of ${totalCardsValue(playerCards)}`);

    while (true) {
      const hitOrStayResponse = retrieveHitOrStay();
      if (hitOrStayResponse[0] === 's') break;

      drawCard(deckOfCards, playerCards);
      prompt(`You now have ${cardFaces(playerCards)} for a total of ${totalCardsValue(playerCards)}`);

      if (busted(playerCards)) break;
    }

    if (busted(playerCards)) {
      displayPlayersCards(playerCards, dealerCards);
      prompt(`${messages.playerBusted} ${messages.dealerWins}`);
      score.dealer += 1;
      if (grandWinner(score)) break;
      if (continueToNextRound()) continue;
    }

    while (totalCardsValue(dealerCards) < DEALER_HIT_UNTIL_TARGET
      && !busted(dealerCards)) {
      drawCard(deckOfCards, dealerCards);
    }
    prompt(`Dealer's cards: ${cardFaces(dealerCards)} ` +
      `for a total of ${totalCardsValue(dealerCards)}`
    );

    if (busted(dealerCards)) {
      displayPlayersCards(playerCards, dealerCards);
      prompt(`${messages.dealerBusted} ${messages.playerWins}`);
      score.player += 1;
      if (grandWinner(score)) break;
      if (continueToNextRound()) continue;
    }

    displayPlayersCards(playerCards, dealerCards);
    const winner = getWinner(playerCards, dealerCards);
    if (winner) score[winner] += 1;
    displayWinner(winner);

    if (grandWinner(score)) break;
    if (continueToNextRound()) continue;
  }

  displayGrandWinner(grandWinner(score));

  if (!playAgain()) break;
}