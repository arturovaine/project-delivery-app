import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Orders = ({ orderNumber, status, date, totalPrice }) => {
  const totalPriceWithComma = () => totalPrice.replace('.', ',');
  const transformDate = () => {
    const nDate = date.split('T')[0];

    return nDate.split('-').reverse().join('/');
  };

  return (
    <div className="orders-card">
      <Link to={ `/customer/orders/${orderNumber}` }>
        <div
          data-testid={ `customer_orders__element-order-id-${orderNumber}` }
        >
          {orderNumber}
        </div>
        <div
          data-testid={ `customer_orders__element-delivery-status-${orderNumber}` }
        >
          {status}
        </div>
        <div>
          <div
            data-testid={ `customer_orders__element-order-date-${orderNumber}` }
          >
            {transformDate()}
          </div>
          <div
            data-testid={ `customer_orders__element-card-price-${orderNumber}` }
          >
            {totalPriceWithComma()}
          </div>
        </div>
      </Link>
    </div>
  );
};

Orders.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};

export default Orders;
