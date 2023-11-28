import { Component } from 'react';
import proptypes from 'prop-types';

class ClassPropsEx extends Component {
  render() {
    return (
      <>
        <div>클래스형 컴포넌트에서의 props</div>
        <div>
          제목은 {this.props.title}, 내용은 {this.props.content}, 숫자는{' '}
          {this.props.number}
        </div>
      </>
    );
  }

  static defaultProps = {
    title: 'nyn',
  };

  static propTypes = {
    title: proptypes.string,
    content: proptypes.string.isRequired,
    number: proptypes.number,
  };
}

// ClassPropsEx.defaultProps = {
//   title: 'nyn',
// };

// ClassPropsEx.propTypes = {
//   title: proptypes.string,
//   content: proptypes.string.isRequired,
//   number: proptypes.number,
// };

export default ClassPropsEx;
