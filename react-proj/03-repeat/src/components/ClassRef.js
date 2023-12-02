import { Component, createRef } from 'react';

class ClassRef extends Component {
  // React.createRef()도 가능 : 대신 import React, {} from 'react';
  input2 = createRef();

  // 콜백함수를 이용해 ref 지정했을 때 ref 변수를 사용하는 방법
  focusInput = () => {
    this.input.focus();
  };

  // 클래스 내부 변수 이용해 ref 지정했을 때 ref 변수를 사용하는 방법
  focusInput2 = () => {
    this.input2.current.focus();
  };

  render() {
    return (
      <>
        {/* 방법 1. 콜백함수를 이용해 ref 지정 */}
        <input
          type="text"
          ref={(ref) =>
            // ref에 콜백함수를 넘길 때 첫번째 매개변수(ref)는 ref 걸려있는 요소(input)를 담고 있음
            (this.input = ref)
          }
        />
        <button type="button" onClick={this.focusInput}>
          버튼
        </button>

        {/* 방법 2. 클래스 내부 변수 이용해 ref 지정 */}
        <input type="text" ref={this.input2} />
        <button type="button" onClick={this.focusInput2}>
          버튼
        </button>
      </>
    );
  }
}

export default ClassRef;
