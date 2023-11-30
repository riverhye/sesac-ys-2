import { Component } from 'react';

class PracClass extends Component {
  state = {
    number: 0,
  };

  render() {
    return (
      <>
        <div>number : {this.state.number}</div>
        <button
          onClick={() => {
            this.setState((prevNumber) => ({ number: prevNumber.number + 1 }));
            this.setState((prevNumber) => ({ number: prevNumber.number + 1 }));
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        >
          -1
        </button>
      </>
    );
  }
}

export default PracClass;
