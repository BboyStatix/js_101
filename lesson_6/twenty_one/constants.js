const TARGET_SCORE = 21;
const DEALER_HIT_UNTIL_TARGET = 17;

const SUITS = Object.freeze({
  HEARTS: 'HEARTS',
  DIAMONDS: 'DIAMONDS',
  CLUBS: 'CLUBS',
  SPADES: 'SPADES'
});

const CARD_FACES = Object.freeze({
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
  JACK: 'JACK',
  QUEEN: 'QUEEN',
  KING: 'KING',
  ACE: 'ACE'
});

const FACE_CARD_VALUE = 10;
const ACE_VALUE = Object.freeze({
  MIN: 1,
  MAX: 11
});

const DECK_OF_CARDS = (() => {
  const cards = [];
  const suits = Object.values(SUITS);
  const cardFaces = Object.values(CARD_FACES);

  suits.forEach(suit => {
    cardFaces.forEach(cardFace => {
      cards.push(Object.freeze([suit, cardFace]));
    });
  });

  return Object.freeze(cards);
})();

module.exports = {
  SUITS,
  CARD_FACES,
  FACE_CARD_VALUE,
  ACE_VALUE,
  TARGET_SCORE,
  DECK_OF_CARDS,
  DEALER_HIT_UNTIL_TARGET
};