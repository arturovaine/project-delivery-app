import React from 'react';

const Button = (props) => {
  const { label, style, onClick, testId } = props;
  
  return (
    <>
      <button
        class={ style }
        data-testid={ testId }
        onClick={ onClick }
        type="button"
      >
        { label }
      </button>
    </>
  )
};

export default Button;
