import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { patchSaleStatus } from '../../../../../services/api';

const SaleDetail = ({ orderNumber, sellerName, date, status }) => {
  const [orderStatus, setOrderStatus] = useState(status);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const transformDate = () => {
    const nDate = date.split('T')[0];

    return nDate.split('-').reverse().join('/');
  };

  const checkStatus = () => {
    if (orderStatus === 'Em Trânsito') {
      setIsBtnDisabled(false);
    }
  };

  const onClickReceive = async () => {
    const statusC = { status: 'Entregue' };
    const { token } = JSON.parse(localStorage.getItem('user'));
    await patchSaleStatus(`/sellers/update/${orderNumber}`, statusC, token);
    setOrderStatus(statusC.status);
  };

  useEffect(() => {
    checkStatus();
  });

  return (
    <div>
      <div>
        Pedido:
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          {orderNumber}
        </span>
      </div>
      <div>
        Vend:
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          {sellerName}
        </span>
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {transformDate()}
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {status}
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled={ isBtnDisabled }
          onClick={ onClickReceive }
        >
          MARCAR COMO ENTREGUE
        </button>
      </div>
    </div>
  );
};

SaleDetail.propTypes = {
  orderNumber: PropTypes.number.isRequired,
  sellerName: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default SaleDetail;
