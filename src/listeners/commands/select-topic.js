const { modals } = require('../../user-interface');
const selectTopic = async ({ ack, body, client, logger }) => {
  await ack();

  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: modals.topicSelection(),
    });

    logger.info(result);
  } catch (e) {
    logger.error(e);
  }
};

module.exports = { selectTopic };
