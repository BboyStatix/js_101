const readline = require('readline-sync');

const invalidNumber = (input) =>
  input.trim().length === 0
  || Number.isNaN(Number(input))
  || Number(input) < 0;

const invalidLoanDuration = (months) =>
  invalidNumber(months)
  || !Number.isInteger(Number(months))
  || Number(months) === 0;

const retrieveInput = (
  question,
  invalidInputMsg = 'Please enter a positive number',
  invalidInput = invalidNumber
) => {
  let input = readline.question(question);

  while (invalidInput(input)) {
    console.log(invalidInputMsg);
    input = readline.question(question);
  }

  return Number(input);
};

const calculateMonthlyPayment = (loanAmount, apr, loanDurationMonths) => {
  const monthlyInterestRate = Number(apr) / 100 / 12;
  if (monthlyInterestRate === 0) return loanAmount / loanDurationMonths;
  return loanAmount *
    (monthlyInterestRate /
      (
        1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))
      )
    );
};

module.exports = {
  retrieveInput,
  calculateMonthlyPayment,
  invalidLoanDuration
};