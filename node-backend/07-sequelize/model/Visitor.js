// ORM : 객체와 db를 매핑하는 기술 (지금은 table을 매핑하려고 함)
// ORM 중 하나인 sequelize 사용 중이니, sequelize 문법에 맞게 작성
// 즉 sequelize를 이용해 table 구조 정의해야 한다!

function Visitor (Sequelize, DataTypes) {
    // sequelize 객체의 define 메서드를 사용해 모델을 정의
    // define은 3개의 인자를 받는다. (테이블 이름, 컬럼 객체, 객체)
    return Sequelize.define(
        "visitor", // 테이블 이름 : visitor
        {
            id: { // 아래 key는 정해진 것으로 변경 불가. (오탈자 주의)
                type: DataTypes.INTEGER,
                allowNull: false, // true is default
                primaryKey: true, // false is default
                autoIncrement: true
            },
            username: {
                type: DataTypes.STRING(10)
            },
            comment: {
                type: DataTypes.TEXT("medium") // tiny, medium, long
            },
        }, // 컬럼 객체 : visitor 테이블에 어떤 컬럼 정의할지 / 컬럼 이름(key): {}
        {
            tableName: "visitor",
            freezeTableName: true,
            // 앞으로는 insert into visitor 같은 거 대신 create() 사용할 건데 (메서드가 자동으로 sql문으로 변경)
            // sequelize에서 간혹 단수로 지정한 테이블 이름을 sql문 날릴 때 복수형으로 바꿈
            // ex. visitor -> visitors
            // 그래서 테이블 이름 고정 true
            timestamps: false
            // insert, update 시 그 시간을 createAt, updateAt 같은 컬럼(만들지도 않았는디)에 자동 저장
            // 그래서 저장하지 말라고 false로 지정
        }
    )
}

module.exports = Visitor;
// 함수 자체를 exports