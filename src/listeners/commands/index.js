const {openTicket} = require("./open-ticket");


module.exports.register = (app) => {
  app.command('/ticket', openTicket)
}