const { resolve } = require('node:path');
const { config } = require('dotenv');

const pathToConfig = '../../.env';
config({ path: resolve(__dirname, pathToConfig) });