require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('player-info', 'root', process.env.MYSQL_PASSWORD, { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;