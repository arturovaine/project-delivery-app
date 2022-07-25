import React from 'react';
import PropTypes from 'prop-types';

const SaleDetail = ({ orderNumber, date, status }) => {
  const transformDate = () => {
    const nDate = date.split('T')[0];
    return nDate.split('-').reverse().join('/');
  };

  return (
    <div>
      <div>
        Pedido:
        <span
          data-testid="seller_order_details__element-order-details-label-order-id"
        >
          {orderNumber}
        </span>
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        {transformDate()}
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </div>
      <div>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </button>

        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </button>
      </div>
    </div>
  );
};

SaleDetail.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default SaleDetail;
