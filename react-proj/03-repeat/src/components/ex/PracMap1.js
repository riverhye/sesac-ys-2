import { useState } from 'react';

function PracMap1() {
  const [userInfo, setUserInfo] = useState([
    { id: 1, name: '코디', email: 'codi@gmail.com' },
    { id: 2, name: '이름', email: 'email@email.com' },
  ]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const addUser = () => {
    const newUser = {
      id: userInfo[userInfo.length - 1] + 1,
      name: name,
      email: email,
    };
    const newUserList = userInfo.concat(newUser);
    setUserInfo(newUserList);
  };

  const deleteUser = (id) => {
    const newUser = userInfo.filter((val) => val.id !== id);
    setUserInfo(newUser);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
      />
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addUser()}
        placeholder="이메일"
      />
      <button onClick={addUser}>등록</button>
      {userInfo.map((value) => {
        return (
          <h1 key={value.id} onDoubleClick={() => deleteUser(value.id)}>
            {value.name} : {value.email}
          </h1>
        );
      })}
    </>
  );
}

export default PracMap1;
