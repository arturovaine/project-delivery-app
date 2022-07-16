import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Seller from '../pages/Seller';

describe('Verifica se os elementos da tela de vendedor estão com os data-testids corretos', () => {
  beforeEach(() => {
    // render(<Seller />);
  });

  // afterEach(() => {
  // });
  // afterEach(cleanup);

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elOrderId = screen.getByTestId('seller_orders__element-order-id-');
    expect(elOrderId).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elDelivStatus = screen.getByTestId('seller_orders__element-delivery-status-');
    expect(elDelivStatus).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elOrderDate = screen.getByTestId('seller_orders__element-order-date-');
    expect(elOrderDate).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elCardPrice = screen.getByTestId('seller_orders__element-card-price-');
    expect(elCardPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elCardAddress = screen.getByTestId('seller_orders__element-card-address-');
    expect(elCardAddress).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elLabelOrderId = screen.getByTestId('seller_order_details__element-order-details-label-order-id');
    expect(elLabelOrderId).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elLabelDelivStat = screen.getByTestId('seller_order_details__element-order-details-label-delivery-status');
    expect(elLabelDelivStat).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elLabelOrderDate = screen.getByTestId('seller_order_details__element-order-details-label-order-date');
    expect(elLabelOrderDate).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const btnPrepCheck = screen.getByTestId('seller_order_details__button-preparing-check');
    expect(btnPrepCheck).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const btnDispatCheck = screen.getByTestId('seller_order_details__button-dispatch-check');
    expect(btnDispatCheck).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elTabItemNum = screen.getByTestId('seller_order_details__element-order-table-item-number-');
    expect(elTabItemNum).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elTabName = screen.getByTestId('seller_order_details__element-order-table-name-');
    expect(elTabName).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elTabQty = screen.getByTestId('seller_order_details__element-order-table-quantity-');
    expect(elTabQty).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elTabUnitPrice = screen.getByTestId('seller_order_details__element-order-table-unit-price-');
    expect(elTabUnitPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elTabSubtotal = screen.getByTestId('seller_order_details__element-order-table-sub-total-');
    expect(elTabSubtotal).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Seller />);
    const elTotalPrice = screen.getByTestId('seller_order_details__element-order-total-price');
    expect(elTotalPrice).toBeInTheDocument();
  });
});
