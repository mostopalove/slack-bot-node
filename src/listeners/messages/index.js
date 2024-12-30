const { greeting } = require('./greeting');

module.exports.register = (app) => {
  app.message(/^(hi|hello|hey).*/i, greeting);
};
