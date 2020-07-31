const {
  retrieveInput,
  calculateMonthlyPayment,
  invalidLoanDuration
} = require('./utils');
const readline = require('readline-sync');


while (true) {
  const loanAmount = retrieveInput('Please input loan amount: ');
  const apr = retrieveInput(
    'Please input Annual Percentage Rate (%) e.g. 5 for 5%: ');
  const loanDurationMonths = retrieveInput(
    'Please input loan duration (months): ',
    'Loan duration must be a positive integer',
    invalidLoanDuration
  );

  const monthlyPayment =
    calculateMonthlyPayment(loanAmount, apr, loanDurationMonths);

  console.log(`Your monthlyInterestRate is ${monthlyPayment.toFixed(2)}`);

  const action = readline.question(
    'Would you like to calculate again?'
    +
    ' (y to continue. any other key to exit)'
  );
  if (action.toLowerCase() === 'y') {
    console.clear();
  } else {
    break;
  }
}