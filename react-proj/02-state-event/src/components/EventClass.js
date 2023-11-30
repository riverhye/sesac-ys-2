import { Component } from 'react';

class EventClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'hello',
    };

    // 클래스 내부 메서드 등을 사용하려면 this를 타고 들어가야 함
    // 그런데 함수 선언문은 그 자체의 this를 가지므로 아래 과정이 필요

    // 1. 함수 선언문 : 원하는 것(함수의 this)에 생성자 내부의 this로 bind 해주기
    // 동적 바인딩 -> 함수를 사용할 때 this 결정 (bind)
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // 함수 선언문으로 메서드를 정의하면 함수 내부에서 자체적으로 this를 생성
  handleOnClick() {
    this.setState({ msg: 'bye' });
  }

  // 2. 함수 표현식 : 정적 바인딩 -> 함수를 선언할 때 this 결정 -> 부모를 this로 가져서 1번 과정 필요 없음
  handleOnClickHello = (e) => {
    console.log(e);
    this.setState({ msg: 'hello' });
  };

  render() {
    return (
      <>
        <h3>클래스형 컴포넌트 event handling 공부</h3>
        {this.state.msg}
        <button onClick={this.handleOnClick}>잘가</button>
        <button onClick={this.handleOnClickHello}>안녕</button>

        <button
          onClick={(e) => {
            // e : 리액트 합성 이벤트 객체. 합성 이벤트에 대한 모든 정보 존재.
            // 그중 target에 접근하면 이벤트가 걸린 태그 확인 가능.
            console.log(e.target);
            console.log(e.type);
          }}
        >
          test
        </button>
      </>
    );
  }
}

export default EventClass;
