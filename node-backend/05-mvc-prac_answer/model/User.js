//exports.getUser = () => {
//    const id = "lily";
//    const pw = "12345";
//    return { id, pw };
    //   {id: "lily", pw: "12345"}
//  };

let users =
`spreatics//12341234//코딩온
codee//4321//코디
lily//1234//릴리`;

const userArr = users.split("\n");
const userObj = [];
for (const user of userArr) {
  const parts = user.split('//');
    userObj.push({
      id: parts[0],
      pw: parts[1],
      name: parts[2]
    });
  }
  // 여기
exports.userObj = userObj;





