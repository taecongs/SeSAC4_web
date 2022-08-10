const Members = (Sequelize, DataTypes) => {
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