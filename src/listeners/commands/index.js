const { openTicket } = require('./open-ticket');
const { selectTopic } = require('./select-topic');

module.exports.register = (app) => {
  app.command('/ticket', openTicket);
  app.command('/request', selectTopic);
};
