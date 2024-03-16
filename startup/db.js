const winston = require('winston');
const mongoose = require('mongoose');

module.exports = function() {
  const db = process.env.DB_CONNECTION_STRING;
  mongoose.connect(db)
    .then(() => winston.info(`Connected to ${db}...`));
}
