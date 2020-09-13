const { totalCardsValue } = require("./utils/");
const { SUITS, CARD_FACES } = require('./constants');

describe('cardValue', () => {
  test('2 to equal 2', () => {
    const card = [SUITS.CLUBS, CARD_FACES[2]];
    const cards = [card];

    expect(totalCardsValue(cards)).toBe(2);
  });

  test('9 to equal 9', () => {
    const card = [SUITS.CLUBS, CARD_FACES[9]];
    const cards = [card];

    expect(totalCardsValue(cards)).toBe(9);
  });

  test('A', () => {
    const card = [SUITS.CLUBS, CARD_FACES.ACE];
    const cards = [card];

    expect(totalCardsValue(cards)).toBe(11);
  });

  test('J', () => {
    const card = [SUITS.CLUBS, CARD_FACES.JACK];
    const cards = [card];

    expect(totalCardsValue(cards)).toBe(10);
  });

  test('2,2', () => {
    const cards = [
      [SUITS.CLUBS, CARD_FACES[2]],
      [SUITS.HEARTS, CARD_FACES[2]],
    ];

    expect(totalCardsValue(cards)).toBe(4);
  });

  test('A,A,A,A to equal 14', () => {
    const suits = Object.keys(SUITS);
    const cards = suits.map(suit => [suit, CARD_FACES.ACE]);
    expect(totalCardsValue(cards)).toBe(14);
  });

  test('A,10,A to equal 12', () => {
    const cards = [
      [SUITS.CLUBS, CARD_FACES['ACE']],
      [SUITS.CLUBS, CARD_FACES['10']],
      [SUITS.HEARTS, CARD_FACES['ACE']],
    ];
    expect(totalCardsValue(cards)).toBe(12);
  });

  test('A,A,A,10 to equal 13', () => {
    const cards = [
      [SUITS.CLUBS, CARD_FACES['ACE']],
      [SUITS.DIAMONDS, CARD_FACES['ACE']],
      [SUITS.HEARTS, CARD_FACES['ACE']],
      [SUITS.CLUBS, CARD_FACES['10']],
    ];
    expect(totalCardsValue(cards)).toBe(13);
  });
});