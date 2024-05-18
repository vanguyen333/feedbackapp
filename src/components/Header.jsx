// import PropTypes from 'prop-types';

const Header = ({ text }) => {
  const headerStyle = {
    backgroundColor: 'blue',
    color: 'red',
  };
  return (
    <>
      <header style={headerStyle}>
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
