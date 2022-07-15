import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Seller from '../pages/Seller';

describe('Verifica se os elementos da tela de vendedor estão com os data-testids corretos', () => {
  test('Verifica ..., na tela de vendedor, com o data-testid correto.', () => {
    // render(<Seller />);
    
  });
});

// itens a implementar...

const elOrderId = screen.getByTestId('seller_orders__element-order-id-');
expect(elOrderId).toBeInTheDocument();

const elDelivStatus = screen.getByTestId('seller_orders__element-delivery-status-');
expect(elDelivStatus).toBeInTheDocument();

const elOrderDate = screen.getByTestId('seller_orders__element-order-date-');
expect(elOrderDate).toBeInTheDocument();

const elCardPrice = screen.getByTestId('seller_orders__element-card-price-');
expect(elCardPrice).toBeInTheDocument();

const elCardAddress = screen.getByTestId('seller_orders__element-card-address-');
expect(elCardAddress).toBeInTheDocument();

// const element = screen.getByTestId('');
// expect(element).toBeInTheDocument();

const elLabelOrderId = screen.getByTestId('seller_order_details__element-order-details-label-order-id');
expect(elLabelOrderId).toBeInTheDocument();

const elLabelDelivStat = screen.getByTestId('seller_order_details__element-order-details-label-delivery-status');
expect(elLabelDelivStat).toBeInTheDocument();

const elLabelOrderDate = screen.getByTestId('seller_order_details__element-order-details-label-order-date');
expect(elLabelOrderDate).toBeInTheDocument();

const btnPrepCheck = screen.getByTestId('seller_order_details__button-preparing-check');
expect(btnPrepCheck).toBeInTheDocument();

const btnDispatCheck = screen.getByTestId('seller_order_details__button-dispatch-check');
expect(btnDispatCheck).toBeInTheDocument();

const elTabItemNum = screen.getByTestId('seller_order_details__element-order-table-item-number-');
expect(elTabItemNum).toBeInTheDocument();

const elTabName = screen.getByTestId('seller_order_details__element-order-table-name-');
expect(elTabName).toBeInTheDocument();

const elTabQty = screen.getByTestId('seller_order_details__element-order-table-quantity-');
expect(elTabQty).toBeInTheDocument();

const elTabUnitPrice = screen.getByTestId('seller_order_details__element-order-table-unit-price-');
expect(elTabUnitPrice).toBeInTheDocument();

const elTabSubtotal = screen.getByTestId('seller_order_details__element-order-table-sub-total-');
expect(elTabSubtotal).toBeInTheDocument();

const elTotalPrice = screen.getByTestId('seller_order_details__element-order-total-price');
expect(elTotalPrice).toBeInTheDocument();
