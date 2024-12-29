const modalSubmit = async ({ ack, body, view, client, logger }) => {
  // Acknowledge the view_submission request
  await ack();

  // Do whatever you want with the input data - here we're saving it to a DB then sending the user a verification of their submission

  // Assume there's an input block with `block_1` as the block_id and `input_a`
  const val = view['state']['values']['input_c']['dreamy_input']['value'];
  const user = body['user']['username'];

  // Message the user
  try {
    await client.chat.postMessage({
      channel: '#testing',
      text: `<@${user}>: *${val}*`,
    });
  }
  catch (error) {
    logger.error(error);
  }

}

module.exports = {
  modalSubmit
}