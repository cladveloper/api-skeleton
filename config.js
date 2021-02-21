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
    dbName: process.env.DB_NAME || "name",
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: Number(process.env.DB_PORT) || 28015,
    dbUser: process.env.DB_USER || "admin",
    dbPassword: process.env.DB_PASSWORD || "",
    dbTimeout: Number(process.env.DB_TIMEOUT) || 20,
}

export default config;