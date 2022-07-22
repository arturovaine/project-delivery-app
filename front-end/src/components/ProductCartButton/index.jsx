import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductCartButton = (props) => {
  const { totalPrice, setTotalPrice, products } = props;
  const history = useHistory();

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      products.forEach((e) => {
        const { quantity, price } = e;
        total += quantity * parseFloat(price);
      });
      setTotalPrice(total.toFixed(2));
    };
    calculateTotalPrice();
  }, [products, setTotalPrice]);

  return (
    <button
      type="button"
      data-testid="customer_products__button-cart"
      onClick={ () => history.push('/customer/checkout') }
    >
      Ver carrinho: R$
      <span data-testid="customer_products__checkout-bottom-value">
        { totalPrice }
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
