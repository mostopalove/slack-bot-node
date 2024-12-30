const { modalSubmit } = require('./modal-submit');
const {
  TOPIC_SUBMITTING_CALLBACK_ID,
} = require('../../constants/topic-selection-constants');
const { topicSubmit } = require('./topic-submit');

module.exports.register = (app) => {
  app.view('view_1', modalSubmit);
  app.view(TOPIC_SUBMITTING_CALLBACK_ID, topicSubmit);
};
