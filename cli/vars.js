import { fileURLToPath } from 'url';
import { dirname } from 'path';
import config from './config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const vars = Object.create(config);
vars.__dirname = __dirname;

vars.rootDirectory = process.cwd;

export default vars;
