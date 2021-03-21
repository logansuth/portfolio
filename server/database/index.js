const db = require('./database');
const User = require('./models/user');
const Boiler = require('./models/boiler');

User.hasMany(Boiler);
Boiler.belongsTo(User);

module.exports = { db, User, Boiler };
