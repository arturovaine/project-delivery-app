import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const { testId } = props;

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="counter-input">
      <input
        type="number"
        min={ 0 }
        max={ 100 }
        data-testid={ testId }
        value={ quantity }
      />
      <div>
        <button
          onClick={ setQuantity(quantity + 1) }
          type="button"
        >
          +
        </button>
        <button
          onClick={ setQuantity(quantity - 1) }
          type="button"
        >
          -
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default Counter;
