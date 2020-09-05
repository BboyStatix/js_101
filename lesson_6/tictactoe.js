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
  while (true) {
    displayBoard(board);
    displayScore(SCORE);

    chooseSquare(startingPlayer, board);
    if (someoneWon(board) || boardFull(board)) break;
    displayBoard(board);

    const nextPlayer = startingPlayer === PLAYER ?
      COMPUTER : PLAYER;

    chooseSquare(nextPlayer, board);
    if (someoneWon(board) || boardFull(board)) break;
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

    if (answer.toLowerCase() === 'n') break;

    resetScore(SCORE);
  } else {
    prompt(messages.nextRound);
    const answer = retrieveAnswer();

    if (answer.toLowerCase() === 'n') break;
  }
}

