const MESSAGES = require('./calculator_messages')
const LANGUAGE = 'en'

module.exports = {
  t: (string, variables = {}) => {
    let message = MESSAGES[LANGUAGE][string]
    Object.entries(variables).map(([name, val]) => {
      message = message.replace(`%{${name}}`, val)
    })
    return message
  }
}