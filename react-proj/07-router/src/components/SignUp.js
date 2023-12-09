// npm i react-hook-form
import { useForm } from 'react-hook-form';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onValid = (data) => {
    // ---- axios 요청 등으로 백에서 데이터 받아오기
    console.log('success!', data);
  };

  //   formState의 errors에 담긴 걸 err로 가져옴
  const onInvalid = (err) => {
    console.log('fail!', err);
  };

  // ex. register("ID") => { name: id } => 객체를 JSX에서 보여주려고 spread 사용

  // ('이름', {내용})
  const genderRegister = register('gender', {
    required: '성별은 필수값입니다.',
  });

  //   e.target.value처럼 실시간으로 'name'의 input value 가져오기
  console.log(watch('ID'));

  return (
    <>
      <h4>React Hook Form Test</h4>
      {/* handleSubmit(onValid[, onInvalid]) */}
      {/* onValid : 폼 정상 제출 가능하면 실행 */}
      {/* onInvalid : (선택값) 폼 정상 제출 불가할 때 실행 */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <input
          type="text"
          placeholder="ID"
          {...register('ID', {
            required: '아이디는 필수값입니다.',
          })}
        />
        {/* errors.ID && erros.message의 축약형 */}
        <div>{errors.ID?.message}</div>
        <input
          type="text"
          placeholder="NAME"
          {...register('username', {
            required: '이름은 필수값입니다.',
            minLength: {
              value: 2, // 값 지정
              message: '이름은 2자 이상 입력해 주세요.', // 만족하지 못했을 때의 오류 메세지
            },
          })}
        />
        <div>{errors.username?.message}</div>
        <input
          type="text"
          placeholder="EMAIL"
          {...register('email', {
            required: '이메일은 필수값입니다.',
            // pattern: {
            //   value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/, // 정규표현식 문자열로 X
            //   message: "올바른 이메일 형식으로 작성해 주세요.",
            // },
            validate: (
              v // input에 담긴 value
            ) => v.includes('gmail.com') || 'gmail로만 가입이 가능합니다.', // false면 error로 빠짐
          })}
        />
        <div>{errors.email?.message}</div>
        {/* js에서 for가 예약어라서 htmlFor로 */}
        <label htmlFor="genderWoman">
          <input type="radio" id="genderWoman" value="wm" {...genderRegister} />
          여
        </label>
        <label htmlFor="genderMan">
          <input type="radio" id="genderMan" value="m" {...genderRegister} />남
        </label>
        <div>{errors.gender?.message}</div>
        <br />

        <select {...register('option', { required: '옵션은 필수값입니다.' })}>
          <option value="">옵션</option>
          <option value="option-1">옵션1</option>
          <option value="option-2">옵션2</option>
          <option value="option-3">옵션3</option>
          <option value="option-4">옵션4</option>
        </select>
        <div>{errors.option?.message}</div>
        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
