import { Component } from 'react';
import proptypes from 'prop-types';

class PracticeClass extends Component {
  render() {
    return (
      <>
        <h1>{this.props.text}</h1>

        <button type="button" onClick={this.props.valid}>
          콘솔 메세지
        </button>
      </>
    );
  }

  static defaultProps = {
    text: '이건 기본 text props입니다.',
  };

  static propTypes = {
    text: proptypes.string.isRequired,
  };
}

export default PracticeClass;
