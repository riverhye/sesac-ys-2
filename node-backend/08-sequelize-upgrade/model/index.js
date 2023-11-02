const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Customer = require('./Customer')(sequelize, Sequelize);
db.Orders = require('./Orders')(sequelize, Sequelize);

// Customer 테이블은 여러 Orders를 가지니까 1:다(hasMany)
db.Customer.hasMany(db.Orders, {
    // onDelete: "cascade", // 테이블 생성 시 on delete cascade 작성했다면
    foreignKey: "custid",
    // sourceKey: "~~" // 다를 경우 작성
});
db.Orders.belongsTo(db.Customer, {
    // onDelete: "cascade", // 테이블 생성 시 on delete cascade 작성했다면
    foreignKey: "custid", // 참조 테이블, FK키 있는 테이블 모두 같은 컬럼(custid)
    // targetKey: "~~" // 다를 경우 targetKey에 참조 테이블 컬럼 작성
});

module.exports = db;