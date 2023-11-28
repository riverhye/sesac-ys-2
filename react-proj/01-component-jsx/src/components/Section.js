import proptypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      <div className="Section__section">
        <h3 className="Section__title">{title}</h3>
        <div>{children}</div>
      </div>
    </>
  );
}

Section.propTypes = {
  title: proptypes.string,
  children: proptypes.node,
};

export default Section;
