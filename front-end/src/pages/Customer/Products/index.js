import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/NavBar';
import { getRequest } from '../../../services/api';
import Load from '../../../components/Load';
import Counter from '../../../components/Counter';
import ProductCartButton from '../../../components/ProductCartButton';

const ProductsPage = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]); // estado controlado pelo counter

  const createCart = () => {
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    if (!cart) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      const crt = {
        customerEmail: email,
        sellerId: 0,
        totalPrice: 0.0,
        deliveryAddress: '',
        deliveryNumber: '',
        products: [],
      };
      localStorage.setItem('carrinho', JSON.stringify({ ...crt }));
    }
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
  }, [products]);

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
              >
                <img
                  src={ product.urlImage }
                  alt={ product.name }
                  data-testid={ `customer_products__img-card-bg-image-${product.id}` }
                />
                <p
                  data-testid={ `customer_products__element-card-title-${product.id}` }
                >
                  {product.name}
                </p>
                <p
                  data-testid={ `customer_products__element-card-price-${product.id}` }
                >
                  {product.price}
                </p>
              </Link>
              <Counter
                testId={ product.id }
                products={ products }
                setProducts={ setProducts }
                productPrice={ product.price }
              />
            </div>
          ))
        }
        <ProductCartButton
          totalPrice={ totalPrice }
          setTotalPrice={ setTotalPrice }
          products={ products }
        />
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
