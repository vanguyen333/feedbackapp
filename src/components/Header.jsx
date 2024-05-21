import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ text, bgColor, textColor }) => {
  const HeaderStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

// Header.defaultProps = {
//   text: 'Feeback UI',
//   bgColor: 'rgba(0,0,0,0.4)',
//   textColor: '#ff6a95',
// };

// Header.propTypes = {
//   text: PropTypes.string,
//   bgColor: PropTypes.string,
// };

export default Header;
