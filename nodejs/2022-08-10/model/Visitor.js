const Visitor = (Sequelize, DataTypes) => {
    // Sequelize는 model/index.js에서의 sequelize
    // DataTypes는 model/index.js에서의 Sequelize


//    CREATE TABLE visitor (
//         id INT not null primary key auto_increment,
//         name VARCHAR(10) not null,
//         comment MEDIUMTEXT
//    );


    // 테이블 구조 정의 - (1)모델(테이블) 이름 설정 (2) 컬럼 정의 (3) 모델의 옵션 정의
    const model = Sequelize.define(
        // (1)모델(테이블) 이름 설정
        'visitor',

        // (2) 컬럼 정의
        {
            // id INT not null primary key auto_increment
            id : {
                // INT => DataTypes.INTEGER
                type : DataTypes.INTEGER,

                // not null
                allowNull : false,

                // primary key
                primaryKey : true,

                autoIncrement : true,
            },

            // name VARCHAR(10) not null
            name : {
                // VARCHAR(10) => DataTypes.STRING(10)
                type : DataTypes.STRING(10),

                // not null
                allowNull : false,
            },

            // comment MEDIUMTEXT
            comment :{
                // MEDIUMTEXT => DataTypes.TEXT('medium')
                type : DataTypes.TEXT('medium'),
            }
        },

        // (3) 모델의 옵션 정의
        {
            // true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.
            timestamps : false,

            tableName : 'visitor',

            // true로 지정하게 되면 이름을 복수로 설정하지 않는다. (테이블 이름을 바꾸지 말아라!)
            freezeTableName : true,
        }
    );


    // return model은 Model index.js에 정의한 db.Visitor의 결과 값으로 들어온다.
    // model == db.Visitor
    return model;
}


module.exports = Visitor;