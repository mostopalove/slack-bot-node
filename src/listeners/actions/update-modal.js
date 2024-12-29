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
      view: {
        type: 'modal',
        // View identifier
        callback_id: 'view_1',
        title: {
          type: 'plain_text',
          text: 'Updated modal'
        },
        blocks: [
          {
            type: 'section',
            text: {
              type: 'plain_text',
              text: 'You updated the modal!'
            }
          },
          {
            type: 'image',
            image_url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJ4M3R3cnBza3U2bnBtcWVkbXJ0NDF4emJ0enpqMmo3aHE4bnJpeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/122ieBYC3AcECI/giphy.gif',
            alt_text: 'Yay! The modal was updated'
          }
        ]
      }
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
}

module.exports = {
  updateModal
}