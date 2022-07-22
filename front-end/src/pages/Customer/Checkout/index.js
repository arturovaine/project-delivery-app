import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import TextInput from '../../../components/TextInput';
// import Button from '../../../components/Button';
import Navbar from '../../../components/NavBar';

const CheckoutPage = () => {
  const [productsCheckout, setProducts] = useState([]);
  const [totalPriceCheckout, setTotalPrice] = useState([]);
  // const [address, setAddress] = useState('');
  // const [addressNumber, setAddressNumber] = useState('');

  useEffect(() => {
    const { products, totalPrice } = JSON.parse(localStorage.getItem('carrinho'));
    setProducts(products);
    setTotalPrice(totalPrice);
    console.log('teste', products);
  }, []);

  // const removeProduct = (event) => {
  //   products;
  //   localstorage.removeItem(event.target);
  // };

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
          { productsCheckout.map((product) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${product.id}`
                }
              >
                { product.id }
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
                { product.quantity * product.price }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${product.id}`
                }
              >
                <button
                  type="button"
                  // onClick={}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        htmlFor=""
        type="button"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total: R$
        {totalPriceCheckout}
      </button>
      <header>Detalhes e Endereço para Entrega</header>
      <label htmlFor="customer_checkout__select-seller">
        P.Vendedora Responsável
        <select
          testId="customer_checkout__select-seller"
        >
          {/* { options } */}
        </select>
      </label>
      <TextInput
        label="Endereço"
        testId="customer_checkout__input-address"
        // onChange={ ({ target: { value } }) => setAddress(value) }
        password
        placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        // value={ address }
      />
      <TextInput
        label="Número"
        testId="customer_checkout__input-addressNumber"
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
          testId="customer_checkout__button-submit-order"
        >
          FINALIZAR PEDIDO
        </button>
      </Link>
    </main>
  );
};

export default CheckoutPage;
