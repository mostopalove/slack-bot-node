const { parseFormValues, wrap } = require('../../utils/form-utils');

const createMessage = (rawValues, user) => {
  const [
    environment,
    applicationName,
    requestType,
    description,
    link,
    screenshot,
  ] = parseFormValues(rawValues);
  const message = [
    [wrap('User:', '*'), `<@${user}>`],
    [wrap('Environment:', '*'), environment],
    [wrap('Application:', '*'), applicationName],
    [wrap('Request type:', '*'), requestType],
    [wrap('Description:', '*'), wrap(description, '```')],
    [wrap('Link:', '*'), link],
    [wrap('Screenshots:', '*'), screenshot],
  ]
    .filter(([_, value]) => !!value)
    .map((row) => row.join(' '))
    .join('\n');

  return message;
};

const applicationFormSubmit = async ({ ack, body, view, client, logger }) => {
  await ack();

  try {
    const user = body['user']['username'];
    const formValues = view['state']['values'];
    const message = createMessage(formValues, user);

    await client.chat.postMessage({
      channel: '#testing',
      text: message,
    });
  } catch (e) {
    logger.error(e);
  }
};

module.exports = { applicationFormSubmit };
