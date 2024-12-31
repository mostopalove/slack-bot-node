const { Message, Blocks } = require('slack-block-builder');
const greetingMessage = (text) => {
  return Message({ text })
    .blocks(Blocks.Section({ text: text }))
    .buildToJSON();
};

module.exports = greetingMessage;
