// 매개변수니까 sequelize든 Sequelize든 노상관
function Customer(sequelize, DataTypes) {
    return sequelize.define("customer",
    {
        custid: {
            type: DataTypes.STRING(10),
            allowNull: false,
            primaryKey: true
        },
        custname: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        addr: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(11)
        },
        birth: {
            type: DataTypes.DATE
        }
    },
    {
        tableName: "customer",
        freezeTableName: true,
        timestamps: false
    })
}

module.exports = Customer;