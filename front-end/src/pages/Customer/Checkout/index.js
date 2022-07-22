import React from 'react';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
// import Navbar from '../../../components/NavBar';

const CheckoutPage = () => {
  const teste = 'teste';
  console.log(teste);

  return (
    <main>
      <header>Finalizar pedido</header>
      <thead>
        <th>Item</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Valor Unitário</th>
        <th>Sub-total</th>
        <th>Remove Item</th>
      </thead>
      <tbody>
        {/* <tr key={ orderProduct.id }>
                   <td data-testid={ `customer_checkout__element-order-table-item-number-${orderProduct.id}` }>{ orderProduct.id }</td>
                   <td data-testid={ `customer_checkout__element-order-table-name-${orderProduct.id}` }>{ orderProduct.name }</td>
                   <td data-testid={ `customer_checkout__element-order-table-quantity-${orderProduct.id}` }>{ orderProduct.quantity }</td>
                   <td data-testid={ `customer_checkout__element-order-table-unit-price-${orderProduct.id}` }>{ orderProduct.unitPrice }</td>
                   <td data-testid={ `customer_checkout__element-order-table-sub-total-${orderProduct.id}` }>{ orderProduct.subTotal }</td>
                   <td>
                     <Button
                       label="Excluir"
                       buttonType="primary-button"
                       testId="customer_checkout__element-order-table-remove-{orderProduct.id}"
                       // onClick={ removeProduct(orderProduct.id) }
                     />
                   </td>
                 </tr> */}
      </tbody>
      <Button
        testId="customer_checkout__element-order-total-price"
      />
      <header>Detalhes e Endereço para Entrega</header>
      <label htmlFor={ teste }>
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
      <Button
        testId="customer_checkout__button-submit-order"
      />
    </main>
  );
};

export default CheckoutPage;
