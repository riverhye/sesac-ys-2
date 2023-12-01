function PracticeNumber() {
  const a = 9;
  const b = 7;

  return (
    <>
      {3 + 5 === 8 ? '정답입니다!' : '오답입니다!'}
      <br />
      {a > b && 'a는 b보다 큽니다'}
    </>
  );
}

export default PracticeNumber;
