const Sequelize = require('sequelize');
const db = require('../index.js');

const Boiler = db.define('boiler', {
  name: Sequelize.STRING,
  size: Sequelize.INTEGER,
});

module.exports = Boiler;
