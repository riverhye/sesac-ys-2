function PracticeHelloCss() {
  const title = 'Hello World';

  return (
    <div className="hello-container">
      <h2 className="hello-title">{title}</h2>
      <div className="hello-input">
        <span>아이디 : </span>
        <input type="text" />
      </div>
      <div className="hello-input">
        <span>비밀번호 : </span>
        <input type="password" />
      </div>
    </div>
  );
}

export default PracticeHelloCss;
