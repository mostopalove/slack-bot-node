const { modalSubmit } = require('./modal-submit');
const {
  TOPIC_SUBMITTING_CALLBACK_ID,
} = require('../../constants/topic-selection-constants');
const { topicSubmit } = require('./topic-submit');
const { APP_CALLBACK_ID } = require('../../constants/application-constants');
const { applicationFormSubmit } = require('./application-form-submit');

module.exports.register = (app) => {
  app.view('view_1', modalSubmit);
  app.view(TOPIC_SUBMITTING_CALLBACK_ID, topicSubmit);
  app.view(APP_CALLBACK_ID, applicationFormSubmit);
};
