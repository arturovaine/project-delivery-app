import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCartButton = (props) => {
  const { totalPrice, setTotalPrice, products } = props;
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const sendTotalPriceToStorage = (price) => {
    const prevData = JSON.parse(localStorage.getItem('carrinho'));
    prevData.totalPrice = price;
    localStorage.setItem('carrinho', JSON.stringify(prevData));
  };

  useEffect(() => {
    const enableButton = () => {
      if (products.length > 0) setIsDisabled(false);
    };
    const calculateTotalPrice = () => {
      let total = 0;
      products.forEach((e) => {
        const { quantity, price } = e;
        total += quantity * parseFloat(price);
      });
      setTotalPrice(total.toFixed(2));
      sendTotalPriceToStorage(total.toFixed(2));
    };
    calculateTotalPrice();
    enableButton();
  }, [products, setTotalPrice]);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/customer/checkout') }
      disabled={ isDisabled }
    >
      Ver carrinho: R$
      <span data-testid="customer_products__checkout-bottom-value">
        { totalPrice.toString().replace('.', ',') }
      </span>
    </button>
  );
};

ProductCartButton.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  setTotalPrice: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    quantity: PropTypes.number,
  })).isRequired,
};

export default ProductCartButton;
