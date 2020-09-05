const {
  PLAYER,
  COMPUTER,
  CHOOSE,
  STARTING_PLAYER
} = require('./constants');
const {
  prompt,
  retrieveAnswer,
  retrieveStartingPlayerChoice,
  initializeBoard,
  displayBoard,
  boardFull,
  displayScore,
  resetScore,
  chooseSquare,
  someoneWon,
  detectWinner,
  alternatePlayer,
  detectFullGameWinner,
} = require("./utils");
const messages = require('./messages.json');

let startingPlayer = STARTING_PLAYER;
if (STARTING_PLAYER === CHOOSE) {
  prompt(messages.whoStartsFirst);
  startingPlayer = retrieveStartingPlayerChoice();
}

const SCORE = { [PLAYER]: 0, [COMPUTER]: 0 };

while (true) {
  const board = initializeBoard();
  let currentPlayer = startingPlayer;
  while (true) {
    displayBoard(board);
    displayScore(SCORE);

    chooseSquare(currentPlayer, board);
    if (someoneWon(board) || boardFull(board)) break;

    currentPlayer = alternatePlayer(currentPlayer);
  }
  displayBoard(board);

  if (someoneWon(board)) {
    const winner = detectWinner(board);
    prompt(`${winner} ${messages.winsThisRound}`);

    SCORE[winner] += 1;
  } else {
    prompt(messages.tie);
  }

  displayScore(SCORE);

  const fullGameWinner = detectFullGameWinner(SCORE);

  if (fullGameWinner) {
    prompt(`${fullGameWinner} ${messages.winsFullGame}`);

    prompt(messages.playAgain);
    const answer = retrieveAnswer();

    if (answer === 'n') break;

    resetScore(SCORE);
  } else {
    prompt(messages.nextRound);
    const answer = retrieveAnswer();

    if (answer === 'n') break;
  }
}

