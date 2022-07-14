import React from 'react';
import './style.css';

const TextInput = (props) => {
  const {
    label,
    password,
    placeholder,
    testId,
  } = props;
  
  return (
    <>
      <div class="input-field">
        { label }
        <input
          data-testid={ testId }
          placeholder={ placeholder }
          type={ password ? 'password' : 'text' }
        />
        
      </div>
    </>
  )
};

export default TextInput;
