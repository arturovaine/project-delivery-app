import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/NavBar';
import { getRequest } from '../../../services/api';
import Load from '../../../components/Load';
// import Counter from '../../../components/Counter';

const ProductsPage = () => {
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const api = async () => {
      const apiProducts = await getRequest('/products');
      setProductsList(apiProducts);
      setLoading(true);
    };
    api();
  }, []);

  const listProducts = () => {
    console.log(productsList);
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
            </div>
          ))
        }
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
