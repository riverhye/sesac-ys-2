function Users (Sequelize, DataTypes) {
    return Sequelize.define(
        "still_user",
        {
            id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false
        },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false
        },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false
        }
    },
    {
        tableName: "still_user",
        freezeTableName: true,
        timestamps: false
    })
}

module.exports = Users