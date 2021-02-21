import fs from "fs";
import boom from '@hapi/boom';
import config from '../../config.js'

const withErrorStack = function(error, stack) {
  if (config.dev) {
    return { error, stack };
  }

  return error;
}

export function wrapError(err, req, res, next) {
  if (!err.isBoom) {
    next(boom.badImplementation(err));
  }

  next(err);
}

export function logError(err, req, res, next) {
  if(err.output && err.output.statusCode >= 500){
    fs.writeFile("./logs", err.stack, function(err){
      if(err) console.log(err)
      else console.log("An error has ocurred in the application");
    })
  }
  next(err);
}

export function errorHandler(err, req, res, next) { // eslint-disable-line
  const {
    output: { statusCode, payload }
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}