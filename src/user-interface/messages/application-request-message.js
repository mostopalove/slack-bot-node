const { Message, Blocks, Md } = require('slack-block-builder');

const applicationRequestMessage = ({
  channel,
  user,
  environment,
  application,
  requestType,
  description,
  link,
  screenshots,
}) => {
  return Message({ channel })
    .blocks(
      Blocks.Section().text(
        [
          `${Md.bold('User:')} ${Md.user(user)}`,
          `${Md.bold('Environment:')} ${environment}`,
          `${Md.bold('Application:')} ${application}`,
          `${Md.bold('Request type:')} ${requestType}`,
          `${Md.bold('Description:')} ${Md.codeBlock(description)}`,
          `${Md.bold('Link:')} ${Md.link(link)}`,
          `${Md.bold('Screenshots:')} ${screenshots.map((url) => Md.link(url))}`,
        ].join('\n'),
      ),
    )
    .buildToJSON();
};

module.exports = applicationRequestMessage;
