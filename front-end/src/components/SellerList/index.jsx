import React, { useEffect, useState } from 'react';
import { getRequest } from '../../services/api';

const SellerList = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const loadSellers = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const sellerData = await getRequest('/sellers/list', token);
      setSellers(sellerData);
    };
    loadSellers();
  }, []);

  return (
    <label htmlFor="customer_checkout__select-seller">
      P.Vendedora Responsável
      <select
        data-testid="customer_checkout__select-seller"
      >
        <option value="null" disabled selected>selecione...</option>
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
