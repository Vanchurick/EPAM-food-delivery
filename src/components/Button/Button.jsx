import React from 'react';
import PropTypes from 'prop-types';

// css

import style from './Button.module.css';

const Button = ({ text, type, func, className, disabled }) => {
  const buttonClasses = [style.button, className];

  if (type === 'submit') {
    return (
      <button
        type="submit"
        onSubmit={func}
        className={buttonClasses.join(' ')}
        disabled={disabled}
      >
        {text}
      </button>
    );
  }
  return (
    <button type="button" onClick={func} className={buttonClasses.join(' ')}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  func: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  func: () => {},
};

export default Button;
