// Package
import cors from "cors";
import express from 'express';
// Imports
import config from "./config.js";
import routes from './app/routes.js';
import {logError, wrapError, errorHandler} from './utils/middlewares/errorHandler.js';
import notFoundHandler from './utils/middlewares/notFoundHandler.js';
import RethinkLib from "./lib/rethinkdb.js";
// Statements
const app = express(); 
const rethinkLib = new RethinkLib();
// Rethink connect
rethinkLib.connect("equip").catch(console.log);
// Express:Cors
app.use(cors({
    origin: config.cors,
    optionsSuccessStatus: 200
}));
// Express:Body-Parser
app.use(express.json());
// Express:Static
app.use(express.static('public'));
// Express:Router
routes(app, express);
// Express:Catch 404
app.use(notFoundHandler);
// Express:Catch Errors
app.use(wrapError);
app.use(logError);
app.use(errorHandler);
// Express:Listen
app.listen(config.port, () => {
    console.log(`Listening http://localhost:${config.port}`);
    console.log(config.dev ? 'Environment: developing' : 'Environment: production');
});
