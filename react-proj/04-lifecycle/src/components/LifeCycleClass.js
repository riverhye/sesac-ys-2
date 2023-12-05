import { Component } from 'react';

class LifeCycleClass extends Component {
  state = { text: '' };

  // 1. 컴포넌트가 mount
  componentDidMount() {
    console.log('class component : 🔆 mount');
  }

  // 2. 컴포넌트가 update
  // mount 될 때는 실행 안 됨!
  // useEffect의 의존성을 사용하려면? 매개변수 사용(이전 props, 이전 state)
  componentDidUpdate(prevProps, prevState) {
    console.log('class component : ✅ update');

    // text state가 바뀔 때마다
    if (prevState.text != this.state.text) {
      console.log('class component : ✅✅ text update');
    }
  }

  // 3. 컴포넌트가 unmount
  componentWillUnmount() {
    console.log('class component : 🆗 unmount');
  }

  render() {
    return (
      <>
        <h2>클래스형 컴포넌트 LifeCycle 공부</h2>
        <div>number: {this.props.number}</div>
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => this.setState({ text: e.target.value })}
        />
      </>
    );
  }
}

export default LifeCycleClass;
