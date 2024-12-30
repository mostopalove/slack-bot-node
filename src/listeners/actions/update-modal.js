const { modals } = require('../../user-interface');

const updateModal = async ({ ack, body, client, logger }) => {
  // Acknowledge the button request
  await ack();

  try {
    if (body.type !== 'block_actions' || !body.view) {
      return;
    }
    // Call views.update with the built-in client
    const result = await client.views.update({
      // Pass the view_id
      view_id: body.view.id,
      // Pass the current hash to avoid race conditions
      hash: body.view.hash,
      // View payload with updated blocks
      view: modals.updatedModal(),
    });
    logger.info(result);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = {
  updateModal,
};
