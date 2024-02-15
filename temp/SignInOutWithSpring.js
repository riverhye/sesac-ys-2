// 로그인
const login = async () => {
  const res = axios.post('/');
  localStorage.setItem('accessToken', res.data.token);
};

// 권한 요청 : 헤더에 같이 보내기
const getData = async () => {
  const res = await axios.get('/todo', {
    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
  });
};

// 로그아웃
const logout = async () => {
  localStorage.removeItem('accessToken');
};
