import PropTypes from 'prop-types';

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
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};
Header.prototypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
