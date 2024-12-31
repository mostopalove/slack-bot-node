const messages = require('./../../user-interface/messages');

const greeting = async ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  await say(JSON.parse(messages.greeting(`Hey there <@${message.user}>!`)));
};

module.exports = {
  greeting,
};
