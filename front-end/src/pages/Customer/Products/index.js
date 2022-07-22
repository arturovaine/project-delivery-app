import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Navbar from '../../../components/NavBar';
import { getRequest } from '../../../services/api';
import Load from '../../../components/Load';
import Counter from '../../../components/Counter';

const ProductsPage = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const history = useHistory();

  const createCart = () => {
    const { email } = JSON.parse(localStorage.getItem('user'));
    const cart = {
      customerEmail: email,
      sellerId: 0,
      totalPrice: 0.0,
      deliveryAddress: '',
      deliveryNumber: '',
      products: [],
    };
    localStorage.setItem('carrinho', JSON.stringify({ ...cart }));
  };

  useEffect(() => {
    const api = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const apiProducts = await getRequest('/products', token);
      setProductsList(apiProducts);
      setLoading(true);
    };
    createCart();
    api();
  }, []);

  const listProducts = () => {
    if (productsList.length === 0) {
      return (<p>nenhum produto encontrado</p>);
    } return (
      <div>
        {
          productsList.map((product) => (
            <div key={ product.id }>
              <Link
                to={ `/customer/orders/${product.id}` }
                data-testid={ `customer_products__element-card-price-${product.id}` }
              >
                <img src={ product.urlImage } alt={ product.name } />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </Link>
              <Counter
                testId={ product.id }
                products={ products }
                setProducts={ setProducts }
              />
            </div>
          ))
        }
        <button
          type="button"
          data-testid="customer_products__checkout-bottom-value"
          onClick={ () => history.push('/customer/checkout') }
        >
          Ver carrinho: R$
          <span>{ totalPrice }</span>
        </button>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      { loading ? listProducts() : <Load />}
    </div>
  );
};

export default ProductsPage;
