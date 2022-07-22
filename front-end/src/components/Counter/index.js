import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = (props) => {
  const { testId, products, setProducts, productPrice } = props;

  const [quantity, setQuantity] = useState(0);

  const updateLocalStorageProducts = (product) => {
    const prevData = JSON.parse(localStorage.getItem('carrinho'));
    prevData.products = product;
    localStorage.setItem('carrinho', JSON.stringify(prevData));
  };

  const onClickRm = () => {
    const negative = -1;
    const arr = [...products];
    const index = arr.findIndex((e) => e.id === testId);
    if (index === negative) return;
    if (quantity > 0) {
      arr[index].quantity -= 1;
      setProducts(arr);
      setQuantity(quantity - 1);
      updateLocalStorageProducts(arr);
    }
  };

  const onClickAdd = () => {
    const negative = -1;
    const arr = [...products];
    const index = arr.findIndex((e) => e.id === testId);
    if (index === negative) {
      arr.push({ id: testId, quantity: 1, price: productPrice });
      setProducts(arr);
      setQuantity(quantity + 1);
      updateLocalStorageProducts(arr);
    }
    arr[index].quantity += 1;
    setQuantity(quantity + 1);
    setProducts(arr);
    updateLocalStorageProducts(arr);
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
  testId: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
  setProducts: PropTypes.func.isRequired,
  productPrice: PropTypes.string.isRequired,
};

export default Counter;
