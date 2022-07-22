import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../../components/TextInput';
// import Button from '../../../components/Button';
import Navbar from '../../../components/NavBar';
import SellerList from '../../../components/SellerList';
import CheckoutTotal from '../../../components/CheckoutTotal';

const CheckoutPage = () => {
  const [productsCheckout, setProducts] = useState([]);

  // const [address, setAddress] = useState('');
  // const [addressNumber, setAddressNumber] = useState('');

  const updateLocalStorageProducts = (product) => {
    const prevData = JSON.parse(localStorage.getItem('carrinho'));
    prevData.products = product;
    localStorage.setItem('carrinho', JSON.stringify(prevData));
  };

  const removeProduct = ({ target }) => {
    const product = [...productsCheckout];
    const newData = product.filter((e) => e.id !== parseInt(target.id, 10));
    // console.log(newData);
    setProducts(newData);
    updateLocalStorageProducts(newData);
  };

  useEffect(() => {
    const fillProducts = () => {
      const { products } = JSON.parse(localStorage.getItem('carrinho'));
      setProducts(products);
    };

    // console.log('update');
    fillProducts();
  }, []);

  return (
    <main>
      <Navbar />
      <header>Finalizar pedido</header>
      <table>
        <thead>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remove Item</th>
        </thead>
        <tbody>
          { productsCheckout.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${product.id}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${product.id}`
                }
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${product.id}`
                }
              >
                { product.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${product.price}`
                }
              >
                { product.price }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${product.id}`
                }
              >
                { (product.quantity * product.price).toFixed(2) }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${product.id}`
                }
              >
                <button
                  type="button"
                  onClick={ removeProduct }
                  id={ product.id }
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <CheckoutTotal
        products={ productsCheckout }
      />
      <header>Detalhes e Endereço para Entrega</header>
      <SellerList />
      <TextInput
        label="Endereço"
        data-testid="customer_checkout__input-address"
        // onChange={ ({ target: { value } }) => setAddress(value) }
        password
        placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        // value={ address }
      />
      <TextInput
        label="Número"
        data-testid="customer_checkout__input-addressNumber"
        // onChange={ ({ target: { value } }) => setAddressNumber(value) }
        password
        placeholder="198"
        // value={ addressNumber }
      />
      <Link
        to="/customer/order/details"
      >
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </Link>
    </main>
  );
};

export default CheckoutPage;
