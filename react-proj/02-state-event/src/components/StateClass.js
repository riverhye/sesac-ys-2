import { Component } from 'react';

class StateClass extends Component {
  // 1. 옛날 방식으로 state 선언
  // 생성자 구현(constructor) 시, 부모 클래스의 생성자인 super를 실행해줘야 this 객체 사용 가능
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       number: 0,
  //       text: 'hello',
  //     };
  //   }

  // 생성자를 구현하지 않으면? 기본 생성자가 자동으로 실행 (아래 props 예시)

  // 2. 최근 방식으로 state 선언
  state = {
    number: 0,
    text: 'hello',
  };

  render() {
    // const {number} = this.state
    return (
      <>
        <div>props 예시 {this.props.name}</div>
        <h3>클래스형 컴포넌트 state</h3>
        <div>
          number state value {this.state.number}
          <button
            onClick={() => {
              // state는 state 변경함수를 사용해 값을 바꾼다.
              // 클래스형 component는 setState 메서드를 제공
              //   this.setState({ number: this.state.number + 1 });

              //   this.setState({ number: this.state.number + 1 });
              // setState를 연달아 2번 사용해야 할 때? 동기처리를 위한 콜백함수 사용
              // WHY? setState는 비동기 처리 (1번이 실행 완료되기 전에 2번이 실행)되어 의도대로 X

              this.setState((prevState) => {
                return { number: prevState.number + 1 };
              });
              // return만 한다면 중괄호와 return 없이 쓸 수 있다
              // ex. () => 5
              this.setState((prevState) => ({ number: prevState.number + 1 }));
            }}
          >
            +2
          </button>
        </div>
      </>
    );
  }
}

export default StateClass;
