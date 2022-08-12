// sequelize 를 불러온다.
const Sequelize = require("sequelize");


// const a = require('../config/config.json');
// const config = a['divelopment'];
// 위의 방식을 한번에 정의 하는 방법이다.
// config.json에 developemnt로 정의 된 내용들을 가지고 온다.
const config = require("../config/config.json")["development"];


const db = {};


const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);


// const db = {'sequelize' : sequelize, 'Sequelize' : Sequelize};
db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Sequlize 문법을 사용할 때는 항상 모델이 존재해야 한다.
// 모델이란? => 테이블 구조
db.Visitor = require('./Visitor')(sequelize, Sequelize);



// db는 키 : 값 형태의 {'sequelize' : sequelize, 'Sequelize' : Sequelize} 모듈로 내보낸다.
module.exports = db;

