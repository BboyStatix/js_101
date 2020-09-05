const readline = require("readline-sync");
const {
  INITIAL_MARKER,
  HUMAN_MARKER,
  COMPUTER_MARKER,
  PLAYER,
  COMPUTER,
  GAMES_TO_WIN,
  WINNING_LINES,
} = require("./constants");
const messages = require('./messages.json');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function joinOr(numbers, delimiter = ', ', joiningWord = 'or') {
  if (numbers.length === 0) return '';
  if (numbers.length === 1) return `${numbers[0]}`;

  const tail = numbers.slice(0, -1);
  return `${tail.join(delimiter)} ${joiningWord} ${numbers.slice(-1)}`;
}

function retrieveAnswer() {
  while (true) {
    const answer = readline.question();
    if (
      answer.toLowerCase() === 'y' ||
      answer.toLowerCase() === 'n'
    ) {
      return answer;
    }

    prompt(messages.invalidInput);
  }
}

function retrieveStartingPlayerChoice() {
  while (true) {
    const choice = readline.question().trim().toLowerCase();
    if ([PLAYER, COMPUTER].includes(choice)) return choice;

    prompt(messages.invalidChoice);
  }
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = INITIAL_MARKER;
  }

  return board;
}

function displayBoard(board) {
  console.clear();

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']}`);
  console.log('     |     |');
  console.log('');
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function displayScore(score) {
  prompt(`Player: ${score[PLAYER]} Computer: ${score[COMPUTER]}`);
}

function resetScore(score) {
  score[PLAYER] = 0;
  score[COMPUTER] = 0;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function chooseSquare(currentPlayer, board) {
  switch (currentPlayer) {
    case PLAYER:
      playerChoosesSquare(board);
      break;
    case COMPUTER:
      computerChoosesSquare(board);
  }
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`${messages.chooseSquare} (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;

    prompt(messages.notValidChoice);
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  const offensiveSquare = getThreateningSquare(board, COMPUTER_MARKER);
  if (offensiveSquare) {
    board[offensiveSquare] = COMPUTER_MARKER;
  } else {
    const threateningSquare = getThreateningSquare(board);
    if (threateningSquare) {
      board[threateningSquare] = COMPUTER_MARKER;
    } else if (board[5] === INITIAL_MARKER) {
      board[5] = COMPUTER_MARKER;
    } else {
      const randomIndex =
        Math.floor(Math.random() * emptySquares(board).length);

      const square = emptySquares(board)[randomIndex];
      board[square] = COMPUTER_MARKER;
    }
  }
}

function alternatePlayer(currentPlayer) {
  return currentPlayer === PLAYER ? COMPUTER : PLAYER;
}

function getThreateningSquare(board, benefactorSymbol = HUMAN_MARKER) {
  for (const winningLine of WINNING_LINES) {
    if (winningLine.filter(
      square => board[square] === benefactorSymbol).length === 2) {
      const threateningSquare = winningLine.find(
        (square) => board[square] === INITIAL_MARKER);
      if (threateningSquare) return threateningSquare;
    }
  }

  return null;
}

function someoneWon(board) {
  return Boolean(detectWinner(board));
}

function detectWinner(board) {
  if (WINNING_LINES.some(combination =>
    combination.every(
      square => board[square] === HUMAN_MARKER))) {
    return PLAYER;
  }

  if (WINNING_LINES.some(combination =>
    combination.every(
      square => board[square] === COMPUTER_MARKER))) {
    return COMPUTER;
  }

  return null;
}

function detectFullGameWinner(score) {
  if (score[PLAYER] === GAMES_TO_WIN) return PLAYER;
  if (score[COMPUTER] === GAMES_TO_WIN) return COMPUTER;
  return null;
}

module.exports = {
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
  alternatePlayer
};