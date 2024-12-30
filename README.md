# Slack Bot

This is a Slack bot built using the `@slack/bolt` framework and `slack-block-builder` package to handle interactive Slack messages. The bot is designed to streamline workflows, enhance communication, and provide interactive features within your Slack workspace.

## Features

- **Interactive Modals and Blocks:** Create dynamic and user-friendly interfaces using `slack-block-builder`.
- **Event Handling:** Respond to messages, commands, and other Slack events seamlessly.
- **Custom Commands:** Implement custom slash commands to meet your team's specific needs.
- **Live Development:** Utilize `nodemon` for hot-reloading during development.
- **Consistent Code Style:** Use `prettier` for automatic code formatting.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- Node.js (v20.18.0 or higher)
- yarn (v1.22.22 or higher) or yarn

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mostopalove/slack-bot-node.git
   cd slack-bot-node
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   SLACK_BOT_TOKEN=<your-slack-bot-token>
   SLACK_SIGNING_SECRET=<your-slack-signing-secret>
   SLACK_APP_TOKEN=<your-slack-app-token>
   ```

   Replace `<your-slack-bot-token>`, `<your-slack-app-token>` and `<your-slack-signing-secret>` with your Slack app credentials.

4. Start the development server:
   ```bash
   yarn develop
   ```

   This will use `nodemon` to restart the server on file changes.

### Deploy

For deployment, ensure you set the environment variables in your hosting environment and use:

```bash
yarn start
```

## Scripts

- `yarn develop`: Start the bot in development mode with `nodemon`.
- `yarn code:format`: Format code using `prettier`.

## Usage

1. Add the bot to your Slack workspace.
2. Interact with the bot using commands or events defined in the code.
3. Customize the bot's behavior by modifying the event listeners and handlers.

## Project Structure

```text
.
├── src/
│   ├── listeners/       # Contains event listeners for Slack interactions
│   │   ├── actions/     # Handlers for button clicks, menu selections, etc.
│   │   ├── commands/    # Custom slash command handlers
│   │   └── views/       # Handlers for views and modals
│   ├── user-interface/  # Contains user interface components
│   │   └── modals/      # Definitions for Slack modals
│   ├── utils/           # Utility functions and helpers
│   └── app.js           # Main entry point for initializing and running the Slack app
├── .env                 # Environment variables
├── .prettierignore      # Files and directories ignored by Prettier
├── .prettierrc          # Prettier configuration
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation
```

## Built With

- [@slack/bolt](https://github.com/slackapi/bolt-js) - Slack app framework
- [slack-block-builder](https://github.com/raycharius/slack-block-builder) - Helper library for Slack Block Kit
- [nodemon](https://nodemon.io/) - Development tool for automatic server restarts
- [prettier](https://prettier.io/) - Code formatter

## Contributing

Feel free to submit issues or pull requests for any bugs or enhancements.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Notes

- Ensure the bot has proper permissions within your Slack app configuration.
- Refer to the [Slack API documentation](https://api.slack.com/) for additional resources and features.
