import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Customer from '../pages/Customer';

describe('Verifica se os elementos da tela de cliente estão com os data-testids corretos', () => {
  test('Verifica ..., na tela de cliente, com o data-testid correto.', () => {
    // render(<Customer />);
    
  });
});

// itens a implementar...

const elLinkProducts = screen.getByTestId('customer_products__element-navbar-link-products');
const elLinkOrders = screen.getByTestId('customer_products__element-navbar-link-orders');
const elUserFullname = screen.getByTestId('customer_products__element-navbar-user-full-name');
const elLinkLogout = screen.getByTestId('customer_products__element-navbar-link-logout');
const elCardTitle = screen.getByTestId('customer_products__element-card-title-');
const elCardPrice = screen.getByTestId('customer_products__element-card-price-');
const imgCardBg = screen.getByTestId('customer_products__img-card-bg-image-');
const btnCardAddItem = screen.getByTestId('customer_products__button-card-add-item-');
const btnCardRemItem = screen.getByTestId('customer_products__button-card-rm-item-');
const inputCardQty = screen.getByTestId('customer_products__input-card-quantity-');
const elCheckoutBotVal = screen.getByTestId('customer_products__checkout-bottom-value');

const elTableItemNum = screen.getByTestId('customer_checkout__element-order-table-item-number-');
const elTableName = screen.getByTestId('customer_checkout__element-order-table-name-');
const elTableQty = screen.getByTestId('customer_checkout__element-order-table-quantity-');
const elTableUnitPrice = screen.getByTestId('customer_checkout__element-order-table-unit-price-');
const elTableSubtotal = screen.getByTestId('customer_checkout__element-order-table-sub-total-');
const elTableRemove = screen.getByTestId('customer_checkout__element-order-table-remove-');
const elTotalPrice = screen.getByTestId('customer_checkout__element-order-total-price');
const selectSeller = screen.getByTestId('customer_checkout__select-seller');
const inputAddress = screen.getByTestId('customer_checkout__input-address');
const inputAddressNum = screen.getByTestId('customer_checkout__input-addressNumber');
const btnSubmitOrder = screen.getByTestId('customer_checkout__button-submit-order');

const elOrderId = screen.getByTestId('customer_orders__element-order-id-');
const elDelivStatus = screen.getByTestId('customer_orders__element-delivery-status-');
const elOrderDate = screen.getByTestId('customer_orders__element-order-date-');
const elOrdersCardPrice = screen.getByTestId('customer_orders__element-card-price-');

const elLabelOrderId = screen.getByTestId('customer_order_details__element-order-details-label-order-id');
const elLabelSellerName = screen.getByTestId('customer_order_details__element-order-details-label-seller-name');
const elLabelOrderDate = screen.getByTestId('customer_order_details__element-order-details-label-order-date');
const elLabelDelivStatus = screen.getByTestId('customer_order_details__element-order-details-label-delivery-status');
const elOrderTableItemNum = screen.getByTestId('customer_order_details__element-order-table-item-number-');
const elOrderTableName = screen.getByTestId('customer_order_details__element-order-table-name-');
const elOrderTableQty = screen.getByTestId('customer_order_details__element-order-table-quantity-');
const elOrderSubtotal = screen.getByTestId('customer_order_details__element-order-table-sub-total-');
const elOrderTotalPrice = screen.getByTestId('customer_order_details__element-order-total-price-');
const elOrderUnitPrice = screen.getByTestId('customer_order_details__element-order-table-unit-price-');
const btnDeliveryCheck = screen.getByTestId('customer_order_details__button-delivery-check');
