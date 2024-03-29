import { useState, useEffect, React } from 'react';
import { useHistory } from 'react-router-dom';
import { postCheckout } from '../../../services/api';

// import Button from '../../../components/Button';
import Navbar from '../../../components/NavBar';
import SellerList from '../../../components/SellerList';
import CheckoutTotal from '../../../components/CheckoutTotal';

const CheckoutPage = () => {
  const [productsCheckout, setProducts] = useState([]);

  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const history = useHistory();

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

  const updateLocalStorageAddress = () => {
    const prevData = JSON.parse(localStorage.getItem('carrinho'));
    prevData.deliveryAddress = address;
    prevData.deliveryNumber = addressNumber;
    localStorage.setItem('carrinho', JSON.stringify(prevData));
  };

  const checkout = () => {
    updateLocalStorageAddress();
    const { token } = JSON.parse(localStorage.getItem('user'));
    const body = JSON.parse(localStorage.getItem('carrinho'));
    body.totalPrice = parseFloat(body.totalPrice);
    postCheckout('/sales/checkout', { ...body }, token)
      .then(({ id }) => {
        history.push(`/customer/orders/${id}`);
      });
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
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                { index + 1 }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                { product.name }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                { product.quantity }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                { (product.price).toString().replace('.', ',') }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {
                  ((product.quantity * product.price)
                    .toFixed(2)).toString().replace('.', ',')
                }
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
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
      <input
        label="Endereço"
        data-testid="customer_checkout__input-address"
        onChange={ ({ target: { value } }) => setAddress(value) }
        placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        value={ address }
      />
      <input
        label="Número"
        data-testid="customer_checkout__input-addressNumber"
        onChange={ ({ target: { value } }) => setAddressNumber(value) }
        placeholder="198"
        value={ addressNumber }
      />

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ checkout }
      >
        FINALIZAR PEDIDO
      </button>
    </main>
  );
};

export default CheckoutPage;
