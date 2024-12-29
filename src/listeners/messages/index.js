const {greeting} = require("./greeting");

module.exports.register = (app) => {
  app.message('hello', greeting)
}