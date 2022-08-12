    //    CREATE TABLE visitor (
    //         id INT not null primary key auto_increment,
    //         name VARCHAR(10) not null,
    //         comment MEDIUMTEXT
    //    );


    // Sequelize는 model/index.js에서의 sequelize
    // DataTypes는 model/index.js에서의 Sequelize
const Members = (Sequelize, DataTypes) => {

    // 테이블 구조 정의 - (1)모델(테이블) 이름 설정 (2) 컬럼 정의 (3) 모델의 옵션 정의    
    const model = Sequelize.define(
        'membership',

        {
            id : {
                type : DataTypes.STRING(10),
                allowNull : false,
                primaryKey : true,
            },

            pw : {
                type : DataTypes.STRING(20),
                allowNull : false,
            },

            name : {
                type : DataTypes.STRING(10),
                allowNull : false,
            },

            email : {
                type : DataTypes.STRING(30),
                allowNull : false,
            }
        },

        {
            timestamps : false,
            tableName : 'membership',
            freezeTableName : true,
        }
    );

    return model;
}

module.exports = Members;