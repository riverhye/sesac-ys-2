// Ver.4 : Redux 구조화 + containers 컴포넌트 폴더 / presentational 컴포넌트 폴더 분리
import './App.css';
import { Box1Container } from './containers/BoxesContainers';

// containers 폴더 :
// redux store에 직접 접근하는 컴포넌트 모아두기

// components 폴더 :
// 보통 presentational 컴포넌트만 저장
// 즉 redux store에 직접 접근하지 않는 컴포넌트 모아두기. (UI 기능, ...)

function AppRedux3() {
  return (
    <div>
      <Box1Container />
    </div>
  );
}

export default AppRedux3;
