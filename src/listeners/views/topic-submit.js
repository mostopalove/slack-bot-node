const {
  TOPIC_BLOCK_ID,
  TOPIC_ACTION_ID,
} = require('../../constants/topic-selection-constants');
const { modals } = require('../../user-interface');

const topicSubmit = async ({ ack, view, logger }) => {
  try {
    const selectedTopic =
      view.state.values[TOPIC_BLOCK_ID][TOPIC_ACTION_ID].selected_option.value;

    await ack({
      response_action: 'update',
      view: modals[selectedTopic](),
    });

    logger.info(`Opened ${selectedTopic} form`);
  } catch (error) {
    logger.error(error);
  }
};

module.exports = { topicSubmit };
