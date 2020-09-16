function deepClone(cards) {
  return JSON.parse(JSON.stringify(cards));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

module.exports = {
  deepClone,
  prompt
};