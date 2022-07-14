import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const TextInput = (props) => {
  const {
    label,
    onChange,
    password,
    placeholder,
    testId,
    value,
  } = props;

  return (
    <div className="input-field">
      <label htmlFor={ label }>
        <input
          data-testid={ testId }
          placeholder={ placeholder }
          type={ password ? 'password' : 'text' }
          onChange={ onChange }
          value={ value }
        />
      </label>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  password: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  testId: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default TextInput;
