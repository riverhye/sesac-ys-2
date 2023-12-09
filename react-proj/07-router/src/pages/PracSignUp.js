import { useForm } from 'react-hook-form';

export default function PracSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log(data);
  };

  const onInvalid = (err) => {
    console.log(err);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onValid, oninvalid)}>
        <input
          type="text"
          placeholder="name"
          {...register('name', { required: '이름은 필수항목입니다.' })}
        />
        <div>{errors.name?.message}</div>
        <input
          type="number"
          placeholder="age"
          {...register('age', {
            min: {
              value: 0,
              message: '0 이상의 숫자만 입력 가능합니다.',
            },
          })}
        />
        <div>{errors.age?.message}</div>
        <button type="submit">제출</button>
      </form>
    </>
  );
}
