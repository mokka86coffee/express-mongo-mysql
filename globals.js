const DELIMITER = '=';
const LOG_SEPARATOR = '\n\n' + DELIMITER.repeat(1e2) + '\n\n';
global.log = (message, ...rest) => console.log( LOG_SEPARATOR, message, ...rest, LOG_SEPARATOR );

const { ObjectId } = require('mongodb');
global.MongoObjectId = str => new ObjectId(str);