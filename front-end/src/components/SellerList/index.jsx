import React, { useEffect, useState } from 'react';
import { getRequest } from '../../services/api';

const SellerList = () => {
  const [sellers, setSellers] = useState([]);

  const updateLocalStorageSellerId = (sellerId) => {
    const prevData = JSON.parse(localStorage.getItem('carrinho'));
    prevData.sellerId = sellerId;
    localStorage.setItem('carrinho', JSON.stringify(prevData));
  };

  const onChangeHandler = ({ target }) => {
    updateLocalStorageSellerId(parseInt(target.id, 10));
  };

  useEffect(() => {
    const loadSellers = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const sellerData = await getRequest('/sellers/list', token);
      setSellers(sellerData);
    };
    loadSellers();
  }, []);

  return (
    <label htmlFor="select-seller">
      P.Vendedora Responsável
      <select
        id="select-seller"
        data-testid="customer_checkout__select-seller"
        onClick={ onChangeHandler }
      >
        { sellers.map((e) => (
          <option
            key={ e.id }
            id={ e.id }
            value={ e.name }
          >
            {e.name}
          </option>)) }
      </select>
    </label>
  );
};

export default SellerList;
