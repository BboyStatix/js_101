const {
  DECK_OF_CARDS,
  TARGET_SCORE,
  CARD_FACES,
  ACE_VALUE,
  FACE_CARD_VALUE
} = require("../constants");
const { deepClone } = require('./utils');
const { JACK, QUEEN, KING, ACE } = CARD_FACES;

function getShuffledCards() {
  const deckOfCardsClone = deepClone(DECK_OF_CARDS);
  const shuffledCards = [];

  while (deckOfCardsClone.length > 0) {
    const randomIdx = Math.round(
      Math.random() * (deckOfCardsClone.length - 1)
    );
    const splicedCard = deckOfCardsClone.splice(randomIdx, 1)[0];
    shuffledCards.push(splicedCard);
  }

  return shuffledCards;
}

/*
1. how to make this w/o pass by ref?
and enforce command query separation?

2. cards.pop() twice seems like we can create a function
for it? What if in future we need to distribute n cards?
Is this function easily extendable?
 */
function distributeCards(cards, playerCards, dealerCards) {
  playerCards.push(cards.pop(), cards.pop());
  dealerCards.push(cards.pop(), cards.pop());
}

function drawCard(cards, recipientCards) {
  recipientCards.push(cards.pop());
}

function busted(cards) {
  return totalCardsValue(cards) > TARGET_SCORE;
}

function getWinner(playerCards, dealerCards) {
  const playerTotal = totalCardsValue(playerCards);
  const dealerTotal = totalCardsValue(dealerCards);

  if (playerTotal > dealerTotal) return 'Player';
  if (playerTotal < dealerTotal) return 'Dealer';
  return null;
}

function cardFaces(cards) {
  return cards.map(card => card[1]);
}

function minimum(cards) {
  return cards.reduce((subTotal, [, cardFace]) => {
    if ([JACK, QUEEN, KING].includes(cardFace)) {
      return subTotal + FACE_CARD_VALUE;
    }
    if (cardFace === ACE) return subTotal + ACE_VALUE.MIN;
    return subTotal + Number(cardFace);
  }, 0);
}

function isAce(card) {
  return card[1] === ACE;
}

function totalCardsValue(cards) {
  const sortedCards = cards.sort(isAce);

  const [headCard, ...tail] = sortedCards;

  if (headCard === undefined) return 0;

  if (headCard[1] === ACE) {
    const remainingCardsValue = minimum(tail);
    const aceValue = ACE_VALUE.MAX + remainingCardsValue <= TARGET_SCORE
      ? ACE_VALUE.MAX : ACE_VALUE.MIN;
    return aceValue + remainingCardsValue;
  }

  return minimum(sortedCards);
}

module.exports = {
  getShuffledCards,
  distributeCards,
  drawCard,
  busted,
  getWinner,
  cardFaces,
  totalCardsValue
};