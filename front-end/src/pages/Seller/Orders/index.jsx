import React, { useEffect, useState } from 'react';
import NavBar from '../../../components/NavBar';
import OrdersCard from './helpers/OrdersCard';
import { getRequest } from '../../../services/api';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getOrders = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const ordersData = await getRequest('/sellers/orders', token);
    setOrders(ordersData);
    setIsLoading(false);
  };

  useEffect(() => {
    getOrders();
  });
  return (
    <main>
      <NavBar />
      <h1>Pedidos dos Clientes</h1>
      {
        !isLoading ? (
          orders.map((e) => (
            <OrdersCard
              key={ e.id }
              orderNumber={ e.id }
              status={ e.status }
              date={ e.saleDate }
              totalPrice={ e.totalPrice }
              address={ e.deliveryAddress }
              addressNumber={ e.deliveryNumber }
            />
          ))
        ) : <span>Loading...</span>
      }
    </main>
  );
};

export default Orders;
