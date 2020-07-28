const readline = require('readline-sync');
const I18n = require('./I18n');

prompt(I18n.t('welcome'));

let continueCalc = 'yes';

while (continueCalc === 'yes' || continueCalc === 'y') {
  prompt(I18n.t('firstNumber'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(I18n.t('invalidNumber'));
    number1 = readline.question();
  }

  prompt(I18n.t('secondNumber'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(I18n.t('invalidNumber'));
    number2 = readline.question();
  }

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
  continueCalc = readline.question().toLowerCase();
}

// helper methods

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}