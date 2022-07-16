import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Customer from '../pages/Customer';

describe('Verifica se os elementos da tela de cliente estão com os data-testids corretos', () => {
  beforeEach(() => {
    // render(<Customer />);
  });

  // afterEach(() => {
  // });
  // afterEach(cleanup);

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLinkProducts = screen.getAllByTestId('customer_products__element-navbar-link-products');
    expect(elLinkProducts).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLinkOrders = screen.getAllByTestId('customer_products__element-navbar-link-orders');
    expect(elLinkOrders).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elUserFullname = screen.getAllByTestId('customer_products__element-navbar-user-full-name');
    expect(elUserFullname).toBeInTheDocument();
  });
  
  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLinkLogout = screen.getAllByTestId('customer_products__element-navbar-link-logout');
    expect(elLinkLogout).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elCardTitle = screen.getAllByTestId('customer_products__element-card-title-');
    expect(elCardTitle).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elCardPrice = screen.getAllByTestId('customer_products__element-card-price-');
    expect(elCardPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const imgCardBg = screen.getAllByTestId('customer_products__img-card-bg-image-');
    expect(imgCardBg).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const btnCardAddItem = screen.getAllByTestId('customer_products__button-card-add-item-');
    expect(btnCardAddItem).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const btnCardRemItem = screen.getAllByTestId('customer_products__button-card-rm-item-');
    expect(btnCardRemItem).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const inputCardQty = screen.getAllByTestId('customer_products__input-card-quantity-');
    expect(inputCardQty).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elCheckoutBotVal = screen.getAllByTestId('customer_products__checkout-bottom-value');
    expect(elCheckoutBotVal).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTableItemNum = screen.getAllByTestId('customer_checkout__element-order-table-item-number-');
    expect(elTableItemNum).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTableName = screen.getAllByTestId('customer_checkout__element-order-table-name-');
    expect(elTableName).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTableQty = screen.getAllByTestId('customer_checkout__element-order-table-quantity-');
    expect(elTableQty).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTableUnitPrice = screen.getAllByTestId('customer_checkout__element-order-table-unit-price-');
    expect(elTableUnitPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTableSubtotal = screen.getAllByTestId('customer_checkout__element-order-table-sub-total-');
    expect(elTableSubtotal).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTableRemove = screen.getAllByTestId('customer_checkout__element-order-table-remove-');
    expect(elTableRemove).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elTotalPrice = screen.getAllByTestId('customer_checkout__element-order-total-price');
    expect(elTotalPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const selectSeller = screen.getAllByTestId('customer_checkout__select-seller');
    expect(selectSeller).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const inputAddress = screen.getAllByTestId('customer_checkout__input-address');
    expect(inputAddress).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const inputAddressNum = screen.getAllByTestId('customer_checkout__input-addressNumber');
    expect(inputAddressNum).toBeInTheDocument();
  });
  
  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const btnSubmitOrder = screen.getAllByTestId('customer_checkout__button-submit-order');
    expect(btnSubmitOrder).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderId = screen.getAllByTestId('customer_orders__element-order-id-');
    expect(elOrderId).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elDelivStatus = screen.getAllByTestId('customer_orders__element-delivery-status-');
    expect(elDelivStatus).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderDate = screen.getAllByTestId('customer_orders__element-order-date-');
    expect(elOrderDate).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrdersCardPrice = screen.getAllByTestId('customer_orders__element-card-price-');
    expect(elOrdersCardPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLabelOrderId = screen.getAllByTestId('customer_order_details__element-order-details-label-order-id');
    expect(elLabelOrderId).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLabelSellerName = screen.getAllByTestId('customer_order_details__element-order-details-label-seller-name');
    expect(elLabelSellerName).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLabelOrderDate = screen.getAllByTestId('customer_order_details__element-order-details-label-order-date');
    expect(elLabelOrderDate).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elLabelDelivStatus = screen.getAllByTestId('customer_order_details__element-order-details-label-delivery-status');
    expect(elLabelDelivStatus).toBeInTheDocument();
  });
  
  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderTableItemNum = screen.getAllByTestId('customer_order_details__element-order-table-item-number-');
    expect(elOrderTableItemNum).toBeInTheDocument();
  });
  
  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderTableName = screen.getAllByTestId('customer_order_details__element-order-table-name-');
    expect(elOrderTableName).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderTableQty = screen.getAllByTestId('customer_order_details__element-order-table-quantity-');
    expect(elOrderTableQty).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderSubtotal = screen.getAllByTestId('customer_order_details__element-order-table-sub-total-');
    expect(elOrderSubtotal).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderTotalPrice = screen.getAllByTestId('customer_order_details__element-order-total-price-');
    expect(elOrderTotalPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const elOrderUnitPrice = screen.getAllByTestId('customer_order_details__element-order-table-unit-price-');
    expect(elOrderUnitPrice).toBeInTheDocument();
  });

  test('Verifica data-testid ...', () => {
    // render(<Customer />);
    const btnDeliveryCheck = screen.getAllByTestId('customer_order_details__button-delivery-check');
    expect(btnDeliveryCheck).toBeInTheDocument();
  });
});
