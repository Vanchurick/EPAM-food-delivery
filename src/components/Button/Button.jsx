import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ text, type, func }) => {
  if (type === 'submit') {
    return (
      <button type="submit" onSubmit={func} className={style.button}>
        {text}
      </button>
    );
  }
  return (
    <button type="button" onClick={func} className={style.button}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default Button;
