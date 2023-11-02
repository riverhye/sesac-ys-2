const { Customer, Orders, Sequelize } = require('../model');
const Op = Sequelize.Op; // operator 불러오기

exports.main = async (req, res) => {
    // Customer의 주문 목록 + Orders의 custname
    const cust = await Customer.findAll({
        attributes: ['custname', 'custid', 'birth'],
        where: { birth: { [Op.gte]: '2000-01-01' } }, // .gte는 >=
        include: [
            {
                model: Orders,
                attributes: {exclude: ['custid'] }, // Customer에서 이미 id 조회함
                // where: {}
            }
        ],
        raw: true // 하나의 객체 안으로 합쳐서 보기
    })

    res.send(cust);
}

