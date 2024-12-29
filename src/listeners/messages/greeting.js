const greeting = async ({message, say}) => {
  // say() sends a message to the channel where the event was triggered
  await say(`Hey there <@${message.user}>!`);
}

module.exports = {
  greeting
};