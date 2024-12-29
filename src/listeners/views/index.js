const {modalSubmit} = require("./modal-submit");

module.exports.register = (app) => {
  app.view('view_1', modalSubmit)
}