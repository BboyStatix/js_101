const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');

const OPERATIONS = {
  addition: 1,
  subtraction: 2,
  multiplication: 3,
  division: 4
};

const LANGUAGE = 'en';

prompt(translate('welcome'));

let continueCalc = true;

while (continueCalc) {
  prompt(translate('firstNumber'));
  const number1 = retrieveInput(isInvalidNumber,
    translate('invalidNumber'));

  prompt(translate('secondNumber'));
  const number2 = retrieveInput(isInvalidNumber,
    translate('invalidNumber'));

  prompt(translate('chooseOperation'));
  const operation = retrieveInput(invalidOperation,
    translate('chooseOperationNumber'));

  const output = calculateOutput(operation, number1, number2);

  if (isFinite(output)) {
    prompt(translate('result', { result: output }));
  } else {
    prompt(translate('cannotDivideByZero'));
  }

  prompt(translate("doAnotherCalc"));
  const action = retrieveInput(invalidAction, translate('invalidInput'));

  if (action.toLowerCase() === 'yes') {
    continueCalc = true;
    console.clear();
  } else {
    continueCalc = false;
  }
}

// helper methods

function prompt(message) {
  console.log(`=> ${message}`);
}

function retrieveInput(invalidInput, invalidInputMsg) {
  let input = readline.question();

  while (invalidInput(input)) {
    prompt(invalidInputMsg);
    input = readline.question();
  }

  return input;
}

function isInvalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  return !['1', '2', '3', '4'].includes(operation);
}

function invalidAction(action) {
  return !['yes', 'no'].includes(action.toLowerCase());
}

function calculateOutput(operation, number1, number2) {
  let output;
  switch (operation) {
    case OPERATIONS.addition:
      output = Number(number1) + Number(number2);
      break;
    case OPERATIONS.subtraction:
      output = Number(number1) - Number(number2);
      break;
    case OPERATIONS.multiplication:
      output = Number(number1) * Number(number2);
      break;
    case OPERATIONS.division:
      output = Number(number1) / Number(number2);
      break;
  }
  return output;
}

function translate(string, variables = {}) {
  let message = MESSAGES[LANGUAGE][string];
  Object.entries(variables).forEach(([name, val]) => {
    message = message.replace(`%{${name}}`, val);
  });
  return message;
}