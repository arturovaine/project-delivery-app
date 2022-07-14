import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    disabled,
    label,
    buttonType,
    onClick,
    testId,
  } = props;

  return (
    <button
      className={ buttonType }
      disabled={ disabled }
      data-testid={ testId }
      onClick={ onClick }
      type="button"
    >
      { label }
    </button>
  );
};

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
};

export default Button;
