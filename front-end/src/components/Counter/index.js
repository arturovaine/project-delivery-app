import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const { testId } = props;

  const [quantity, setQuantity] = useState(0);

  const onClickRm = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const onClickAdd = () => {
    setQuantity(quantity + 1);
  };

  const onChangeHandler = ({ target }) => {
    setQuantity(target.value);
  };

  return (
    <div className="counter-input">
      <button
        onClick={ onClickRm }
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${testId}` }
      >
        -
      </button>
      <input
        type="number"
        min={ 0 }
        max={ 100 }
        data-testid={ `customer_products__input-card-quantity-${testId}` }
        value={ quantity }
        onChange={ onChangeHandler }
      />
      <div>
        <button
          onClick={ onClickAdd }
          type="button"
          data-testid={ `customer_products__button-card-add-item-${testId}` }
        >
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  testId: PropTypes.string.isRequired,
};

export default Counter;
