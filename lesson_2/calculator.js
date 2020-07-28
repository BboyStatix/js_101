const readline = require('readline-sync');
const I18n = require('./I18n');

prompt(I18n.t('welcome'));

let continueCalc = true

while (continueCalc) {
  prompt(I18n.t('firstNumber'));
  let number1 = retrieveInput()

  prompt(I18n.t('secondNumber'));
  let number2 = retrieveInput()

  prompt(I18n.t('chooseOperation'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(I18n.t('chooseOperationNumber'));
    operation = readline.question();
  }

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

  prompt(I18n.t('result', { result: output }));

  prompt(I18n.t("doAnotherCalc"));
  let action = readline.question().toLowerCase();
  while (invalidAction(action)) {
    prompt(I18n.t('invalidInput'))
    action = readline.question().toLowerCase();
  }

  continueCalc = action === 'yes'
}

// helper methods

function prompt(message) {
  console.log(`=> ${message}`);
}

function retrieveInput() {
  let number = readline.question();

  while (invalidNumber(number)) {
    prompt(I18n.t('invalidNumber'));
    number = readline.question();
  }

  return number
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function invalidAction(action) {
  return !['yes', 'no'].includes(action)
}