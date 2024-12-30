const { Modal, Elements, Blocks, Option } = require('slack-block-builder');
const {
  TOPIC_SUBMITTING_CALLBACK_ID,
  TOPIC_BLOCK_ID,
  TOPIC_ACTION_ID,
  TOPIC_OPTIONS,
} = require('../../constants/topic-selection-constants');

const topicSelection = () => {
  return Modal({
    title: 'New request',
    callbackId: TOPIC_SUBMITTING_CALLBACK_ID,
  })
    .blocks(
      Blocks.Input({
        label: 'Please select the topic of your request',
        blockId: TOPIC_BLOCK_ID,
      }).element(
        Elements.StaticSelect({
          placeholder: 'Chose the most relevant subject',
          actionId: TOPIC_ACTION_ID,
        }).options(TOPIC_OPTIONS.map((optionData) => Option(optionData))),
      ),
    )
    .submit('Select')
    .buildToJSON();
};

module.exports = topicSelection;
