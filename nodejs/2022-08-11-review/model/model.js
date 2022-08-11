/* Model 이란?
- 데이터를 처리하는 부분
- 어떤 데이터가 들어가는 정의
*/

// sequlize를 불러온다.
const Sequelize = require('sequelize');


// config.json에 development로 정의 된 내용들을 가지고 온다.
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


// 시퀄라이즈 문법을 사용할 때는 항상 모델(테이블 구조)이 존재해야 한다. 
db.Members = require('./Members')(sequelize, Sequelize);


// db는 키 : 값 형태의 {'sequelize' : sequelize, 'Sequelize' : Sequelize} 모듈로 내보낸다.
module.exports = db;


