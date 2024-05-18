// import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
  const headerstyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <>
      <header style={headerstyles}>
        <div className="container">
          <h1>{text}</h1>
        </div>
      </header>
    </>
  );
};
Header.defaultProps = {
  text: 'Feeback UI',
};

export default Header;
