import proptypes from 'prop-types';

function PracticeBook(props) {
  return (
    <div className="PracticeBook__container">
      <div className="PracticeBook__cover">
        <h2 className="PracticeBook__cover-title">이번주 베스트셀러</h2>
        <div className="PracticeBook__cover-img">
          <img src="/kuromi.jpg" />
        </div>
      </div>
      <div>
        <h3>{props.title}</h3>
        <div>
          <h5>저자 : {props.author}</h5>
          <h5>판매가 : {props.price}</h5>
          <h5>구분 : {props.type}</h5>
        </div>
      </div>
    </div>
  );
}

PracticeBook.propTypes = {
  title: proptypes.string,
  author: proptypes.string,
  price: proptypes.string,
  type: proptypes.string,
};

export default PracticeBook;
