import proptypes from 'prop-types';

function FoodIntroduction({ food }) {
  return (
    <>
      <span style={{ color: 'red' }}>{food}</span>은 온갖 채소를 넣어 먹을 수
      있는 맛있는 음식입니다.
    </>
  );
}

FoodIntroduction.defaultValue = {
  food: '마라탕',
};

export default FoodIntroduction;
