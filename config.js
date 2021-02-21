// Modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';
// Packages
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({path: __dirname + "/.env"});

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS || "*",
}

export default config;