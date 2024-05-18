// import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <>
      <header>
        <div className="container">
          <h1>{text}</h1>
        </div>
      </header>
    </>
  );
};
// Header.defaultProps = {
//   text: 'Feeback UI',
// };

export default Header;
