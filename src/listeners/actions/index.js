const { updateModal } = require('./update-modal');

module.exports.register = (app) => {
  app.action('button_abc', updateModal);
};
