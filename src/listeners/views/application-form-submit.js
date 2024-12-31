const { parseFormValues } = require('../../utils/form-utils');
const messages = require('../../user-interface/messages');

const applicationFormSubmit = async ({ ack, body, view, client, logger }) => {
  await ack();

  try {
    const user = body['user']['username'];
    const formValues = view['state']['values'];
    const [
      environment,
      application,
      requestType,
      description,
      link,
      screenshots,
    ] = parseFormValues(formValues);

    const message = messages.application({
      channel: '#testing',
      user,
      environment,
      application,
      requestType,
      description,
      link,
      screenshots,
    });
    await client.chat.postMessage(JSON.parse(message));
  } catch (e) {
    logger.error(e);
  }
};

module.exports = { applicationFormSubmit };
