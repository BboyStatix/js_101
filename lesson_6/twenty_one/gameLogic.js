const {
  DECK_OF_CARDS,
  TARGET_SCORE,
  CARD_FACES,
  ACE_VALUE,
  FACE_CARD_VALUE,
  TARGET_WINS
} = require("./constants");
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

  if (playerTotal > dealerTotal) return 'player';
  if (playerTotal < dealerTotal) return 'dealer';
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
    const aceValue =
      ACE_VALUE.MAX + remainingCardsValue <= TARGET_SCORE ?
        ACE_VALUE.MAX
        :
        ACE_VALUE.MIN;
    return aceValue + remainingCardsValue;
  }

  return minimum(sortedCards);
}

function grandWinner(score) {
  if (score.player === TARGET_WINS) return 'player';
  if (score.dealer === TARGET_WINS) return 'dealer';
  return null;
}

module.exports = {
  getShuffledCards,
  distributeCards,
  drawCard,
  busted,
  getWinner,
  cardFaces,
  totalCardsValue,
  grandWinner
};