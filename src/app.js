require('./utils/env');

const { App, LogLevel } = require('@slack/bolt');
const { registerListeners } = require('./listeners');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000,
  logLevel: LogLevel.DEBUG,
});
registerListeners(app);

(async () => {
  // Start your app
  await app.start();

  app.logger.info('⚡️ Bolt app is running!');
})();
