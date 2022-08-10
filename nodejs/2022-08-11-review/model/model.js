/* Model 이란?
- 데이터를 처리하는 부분
- 어떤 데이터가 들어가는 정의
*/

const Sequelize = require('sequelize');


const config = require('../config/config.json')["development"];


const db = {};


const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);


db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.Members = require('./Members')(sequelize, Sequelize);


module.exports = db;


