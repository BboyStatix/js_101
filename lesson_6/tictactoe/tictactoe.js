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

const score = { [PLAYER]: 0, [COMPUTER]: 0 };

while (true) {
  const board = initializeBoard();
  let currentPlayer = startingPlayer;
  let winner = null
  while (true) {
    displayBoard(board);
    displayScore(score);

    chooseSquare(currentPlayer, board);
    winner = detectWinner(board)
    if (someoneWon(winner) || boardFull(board)) break;

    currentPlayer = alternatePlayer(currentPlayer);
  }
  displayBoard(board);

  if (someoneWon(winner)) {
    prompt(`${winner} ${messages.winsThisRound}`);

    score[winner] += 1;
  } else {
    prompt(messages.tie);
  }

  displayScore(score);

  const fullGameWinner = detectFullGameWinner(score);

  if (fullGameWinner) {
    prompt(`${fullGameWinner} ${messages.winsFullGame}`);

    prompt(messages.playAgain);
    const answer = retrieveAnswer();

    if (answer === 'n') break;

    resetScore(score);
  } else {
    prompt(messages.nextRound);
    const answer = retrieveAnswer();

    if (answer === 'n') break;
  }
}

