import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/NavBar';
import { getRequest } from '../../../services/api';
import Orders from './helpers/Orders';
import './orders-style.css';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getCustomerOrders = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const ordersData = await getRequest('/customer/orders', token);
      setOrders(ordersData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCustomerOrders();
  }, []);

  return (
    <main>
      <Navbar />
      <section className="orders-card-container">
        {
          !isLoading ? (
            orders.map((e) => (
              <Orders
                key={ e.id }
                orderNumber={ e.id }
                status={ e.status }
                date={ e.saleDate }
                totalPrice={ e.totalPrice }
              />
            ))
          ) : <span>Loading...</span>
        }
      </section>
    </main>
  );
};

export default OrdersPage;
