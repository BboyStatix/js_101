function deepClone(cards) {
  return JSON.parse(JSON.stringify(cards));
}

module.exports = {
  deepClone
};