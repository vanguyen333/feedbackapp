import { isDisabled } from '@testing-library/user-event/dist/utils';
import React from 'react';

const Button = ({ children, version, type, isDisabled }) => {
  return (
    <div type={type} isDisabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </div>
  );
};
Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false,
};

export default Button;
