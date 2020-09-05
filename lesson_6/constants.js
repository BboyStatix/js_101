const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const PLAYER = 'player';
const COMPUTER = 'computer';
const CHOOSE = 'choose';
const GAMES_TO_WIN = 2;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
];
const STARTING_PLAYER = CHOOSE;

module.exports = {
  INITIAL_MARKER,
  HUMAN_MARKER,
  COMPUTER_MARKER,
  PLAYER,
  COMPUTER,
  CHOOSE,
  GAMES_TO_WIN,
  WINNING_LINES,
  STARTING_PLAYER,
};