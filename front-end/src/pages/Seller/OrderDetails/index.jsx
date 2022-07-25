import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequest } from '../../../services/api';
import Navbar from '../../../components/NavBar';
import Table from './helpers/Table/Table';
import TableHeader from './helpers/Table/TableHeader';
import TableBody from './helpers/Table/TableBody';
import ProductsData from './helpers/Table/ProductsData';
import SaleDetail from './helpers/SaleDetail/SaleDetail';

const OrdersDetailsPage = () => {
  const { id } = useParams();
  const [sale, setSale] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const teste = 'Detalhes do Pedido';

  const getCustomerSale = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const saleData = await getRequest(`/sellers/orders/${id}`, token);
    setSale(saleData);
    setIsLoading(false);
  };

  const getTotalPrice = () => (sale.totalPrice).replace('.', ',');

  useEffect(() => {
    getCustomerSale();
  });

  return (
    <main>
      <Navbar />
      <h1>{ teste }</h1>
      {
        !isLoading
          ? (
            <div>
              <SaleDetail
                orderNumber={ sale.id }
                date={ sale.saleDate }
                status={ sale.status }
              />
              <Table>
                <TableHeader />
                <TableBody>
                  {
                    sale.SalesProducts.map(
                      (item, index) => (<ProductsData
                        key={ index }
                        position={ index }
                        item={ item }
                      />),
                    )
                  }
                </TableBody>
              </Table>
              <div>
                Total:
                <span
                  data-testid="seller_order_details__element-order-total-price"
                >
                  {getTotalPrice()}
                </span>
              </div>
            </div>
          )
          : <span>Loading...</span>
      }
    </main>
  );
};

export default OrdersDetailsPage;
