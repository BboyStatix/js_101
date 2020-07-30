const readline = require('readline-sync');
const I18n = require('./I18n');

prompt(I18n.t('welcome'));

let continueCalc = true

while (continueCalc) {
  prompt(I18n.t('firstNumber'));
  const number1 = retrieveInput(invalidNumber, I18n.t('invalidNumber'))

  prompt(I18n.t('secondNumber'));
  const number2 = retrieveInput(invalidNumber, I18n.t('invalidNumber'))

  prompt(I18n.t('chooseOperation'));
  const operation = retrieveInput(invalidOperation, I18n.t('chooseOperationNumber'))

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  if (isFinite(output)) {
    prompt(I18n.t('result', { result: output }));
  } else {
    prompt(I18n.t('invalidInput'));
  }

  prompt(I18n.t("doAnotherCalc"));
  const action = retrieveInput(invalidAction, I18n.t('invalidInput'))

  if (action.toLowerCase() === 'yes') {
    continueCalc = true
    console.clear();
  } else {
    continueCalc = false
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

  return input
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidOperation(operation) {
  return !['1', '2', '3', '4'].includes(operation)
}

function invalidAction(action) {
  return !['yes', 'no'].includes(action.toLowerCase())
}