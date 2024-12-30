const { modals } = require('../../user-interface');

const openTicket = async ({ ack, body, client, logger }) => {
  // Acknowledge the command request
  await ack();

  try {
    // Call views.open with the built-in client
    const result = await client.views.open({
      // Pass a valid trigger_id within 3 seconds of receiving it
      trigger_id: body.trigger_id,
      // View payload
      view: modals.mainModal(),
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  openTicket,
};
