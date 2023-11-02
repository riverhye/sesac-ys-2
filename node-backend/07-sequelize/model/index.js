const Sequelize = require("sequelize");
// Sequelize.STRING
// Sequelize.INTEGER 모듈에 요런 타입이 있다.
const config = require("../config/config.json")["development"];

const db = {};
// 객체 만듦
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 주로 require로 함수를 변수에 담고, 담은 걸 호출했던 방식 사용했음
// 그 대신 바로 호출하는 방식 (길어지면 복잡해)
// 함수 호출하니까 sequelize로 테이블을 정의한 객체를 return하네? 그걸 db.Visitor에 담겠다!
db.Visitor = require("./Visitor")(sequelize, Sequelize);
// 호출하는 이 시점에서 테이블 정의
db.User = require("./Users")(sequelize, Sequelize);

module.exports = db;