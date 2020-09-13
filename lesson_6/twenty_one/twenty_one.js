const { DEALER_HIT_UNTIL_TARGET } = require("./constants");
const messages = require('./messages.json');
const {
  prompt,
  retrieveHitOrStay,
  displayWinner,
  displayPlayAgain,
  playAgain
} = require('./utils/io');
const {
  getShuffledCards,
  distributeCards,
  drawCard,
  busted,
  getWinner,
  cardFaces,
  totalCardsValue
} = require('./utils/game');


while (true) {
  console.clear();

  const playerCards = [];
  const dealerCards = [];
  const deckOfCards = getShuffledCards();
  distributeCards(deckOfCards, playerCards, dealerCards);

  prompt(messages.welcome);
  prompt(`Dealer has ${dealerCards[0][1]} and unknown card`);
  prompt(`You have ${playerCards[0][1]} and ${playerCards[1][1]} for a total of ${totalCardsValue(playerCards)}`);

  while (true) {
    const hitOrStayResponse = retrieveHitOrStay();
    if (hitOrStayResponse === 'stay') break;

    drawCard(deckOfCards, playerCards);
    prompt(`You now have ${cardFaces(playerCards)} for a total of ${totalCardsValue(playerCards)}`);

    if (busted(playerCards)) break;
  }

  if (busted(playerCards)) {
    prompt(`${messages.playerBusted} ${messages.dealerWins}`);

    displayPlayAgain();
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  while (totalCardsValue(dealerCards) < DEALER_HIT_UNTIL_TARGET
    && !busted(dealerCards)) {
    drawCard(deckOfCards, dealerCards);
  }
  prompt(`Dealer's cards: ${cardFaces(dealerCards)} ` +
    `for a total of ${totalCardsValue(dealerCards)}`
  );

  if (busted(dealerCards)) {
    prompt(`${messages.dealerBusted} ${messages.playerWins}`);

    displayPlayAgain();
    if (playAgain()) {
      continue;
    } else {
      break;
    }
  }

  console.log('===========');
  prompt(`Player has ${playerCards} for a total of ${totalCardsValue(playerCards)}`);
  prompt(`Dealer has ${dealerCards} for a total of ${totalCardsValue(dealerCards)}`);
  console.log('===========');
  displayWinner(getWinner(playerCards, dealerCards));

  displayPlayAgain();
  if (!playAgain()) break;
}
