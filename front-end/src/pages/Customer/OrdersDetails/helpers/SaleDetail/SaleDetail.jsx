import React from 'react';
import PropTypes from 'prop-types';

const SaleDetail = ({ orderNumber, sellerName, date, status }) => {
  const transformDate = () => {
    const nDate = date.split('T')[0];
    return nDate;
  };

  return (
    <div>
      <div>
        <p>Pedido</p>
        <span>{orderNumber}</span>
      </div>
      <div>
        <p>
          Vend:
          {sellerName}
        </p>
      </div>
      <div>{transformDate()}</div>
      <div>{status}</div>
      <div>
        <button type="button">MARCAR COMO ENTREGUE</button>
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
