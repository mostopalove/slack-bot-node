import { resolve } from 'node:path';
import { config } from 'dotenv';

const pathToConfig = '../../.env';
config({ path: resolve(__dirname, pathToConfig) });
