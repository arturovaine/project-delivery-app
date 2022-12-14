import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { patchSaleStatus } from '../../../../../services/api';

const SaleDetail = ({ orderNumber, date, status }) => {
  const [orderStatus, setOrderStatus] = useState(status);
  const [isPrepareBtnDisabled, setIsPrepareBtnDisabled] = useState(true);
  const [isDispatchBtnDisabled, setIsDispatchBtnDisabled] = useState(true);

  const transformDate = () => {
    const nDate = date.split('T')[0];
    return nDate.split('-').reverse().join('/');
  };

  const checkStatus = () => {
    if (orderStatus === 'Pendente') {
      setIsPrepareBtnDisabled(false);
      setIsDispatchBtnDisabled(true);
    }
    if (orderStatus === 'Preparando') {
      setIsDispatchBtnDisabled(false);
      setIsPrepareBtnDisabled(true);
    }
    if (orderStatus === 'Em Trânsito') {
      setIsPrepareBtnDisabled(true);
      setIsDispatchBtnDisabled(true);
    }
  };

  const onClickPrepare = async () => {
    const statusP = { status: 'Preparando' };
    const { token } = JSON.parse(localStorage.getItem('user'));
    await patchSaleStatus(`/sellers/update/${orderNumber}`, statusP, token);
    setOrderStatus(statusP.status);
  };

  const onClickDispatch = async () => {
    const statusD = { status: 'Em Trânsito' };
    const { token } = JSON.parse(localStorage.getItem('user'));
    await patchSaleStatus(`/sellers/update/${orderNumber}`, statusD, token);
    setOrderStatus(statusD.status);
  };

  useEffect(() => {
    checkStatus();
  });

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
        {orderStatus}
      </div>
      <div>
        <button
          type="button"
          data-testid="seller_order_details__button-preparing-check"
          disabled={ isPrepareBtnDisabled }
          onClick={ onClickPrepare }
        >
          PREPARAR PEDIDO
        </button>

        <button
          type="button"
          data-testid="seller_order_details__button-dispatch-check"
          disabled={ isDispatchBtnDisabled }
          onClick={ onClickDispatch }
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
