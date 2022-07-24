import React from 'react';
import PropTypes from 'prop-types';

const ProductsData = ({ position, item }) => {
  const count = position + 1;

  const { quantity } = item;
  const { name, price } = item.product;

  const calcSubTotal = () => {
    const unitPrice = parseFloat(price);
    const subTotal = (unitPrice * quantity).toFixed(2);
    return subTotal.toString().replace('.', ',');
  };

  const editPrice = () => price.replace('.', ',');

  return (
    <tr>
      <td
        data-testid={
          `customer_order_details__element-order-table-item-number-${count}`
        }
      >
        {count}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-name-${count}`
        }
      >
        {name}
      </td>
      <td
        data-testid={
          `customer_order_details__element-order-table-quantity-${count}`
        }
      >
        {quantity}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-unit-price-${count}`
        }
      >
        {editPrice()}
      </td>
      <td
        data-testid={
          `customer_checkout__element-order-table-sub-total-${count}`
        }
      >
        { calcSubTotal() }
      </td>
    </tr>
  );
};

ProductsData.propTypes = {
  position: PropTypes.number.isRequired,
  item: PropTypes.shape({
    productId: PropTypes.number,
    quantity: PropTypes.number,
    product: PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductsData;
