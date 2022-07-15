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
expect(elLinkProducts).toBeInTheDocument();

const elLinkOrders = screen.getByTestId('customer_products__element-navbar-link-orders');
expect(elLinkOrders).toBeInTheDocument();

const elUserFullname = screen.getByTestId('customer_products__element-navbar-user-full-name');
expect(elUserFullname).toBeInTheDocument();

const elLinkLogout = screen.getByTestId('customer_products__element-navbar-link-logout');
expect(elLinkLogout).toBeInTheDocument();

const elCardTitle = screen.getByTestId('customer_products__element-card-title-');
expect(elCardTitle).toBeInTheDocument();

const elCardPrice = screen.getByTestId('customer_products__element-card-price-');
expect(elCardPrice).toBeInTheDocument();

const imgCardBg = screen.getByTestId('customer_products__img-card-bg-image-');
expect(imgCardBg).toBeInTheDocument();

const btnCardAddItem = screen.getByTestId('customer_products__button-card-add-item-');
expect(btnCardAddItem).toBeInTheDocument();

const btnCardRemItem = screen.getByTestId('customer_products__button-card-rm-item-');
expect(btnCardRemItem).toBeInTheDocument();

const inputCardQty = screen.getByTestId('customer_products__input-card-quantity-');
expect(inputCardQty).toBeInTheDocument();

const elCheckoutBotVal = screen.getByTestId('customer_products__checkout-bottom-value');
expect(elCheckoutBotVal).toBeInTheDocument();

// const element = screen.getByTestId('');
// expect(element).toBeInTheDocument();

const elTableItemNum = screen.getByTestId('customer_checkout__element-order-table-item-number-');
expect(elTableItemNum).toBeInTheDocument();

const elTableName = screen.getByTestId('customer_checkout__element-order-table-name-');
expect(elTableName).toBeInTheDocument();

const elTableQty = screen.getByTestId('customer_checkout__element-order-table-quantity-');
expect(elTableQty).toBeInTheDocument();

const elTableUnitPrice = screen.getByTestId('customer_checkout__element-order-table-unit-price-');
expect(elTableUnitPrice).toBeInTheDocument();

const elTableSubtotal = screen.getByTestId('customer_checkout__element-order-table-sub-total-');
expect(elTableSubtotal).toBeInTheDocument();

const elTableRemove = screen.getByTestId('customer_checkout__element-order-table-remove-');
expect(elTableRemove).toBeInTheDocument();

const elTotalPrice = screen.getByTestId('customer_checkout__element-order-total-price');
expect(elTotalPrice).toBeInTheDocument();

const selectSeller = screen.getByTestId('customer_checkout__select-seller');
expect(selectSeller).toBeInTheDocument();

const inputAddress = screen.getByTestId('customer_checkout__input-address');
expect(inputAddress).toBeInTheDocument();

const inputAddressNum = screen.getByTestId('customer_checkout__input-addressNumber');
expect(inputAddressNum).toBeInTheDocument();

const btnSubmitOrder = screen.getByTestId('customer_checkout__button-submit-order');
expect(btnSubmitOrder).toBeInTheDocument();

// const element = screen.getByTestId('');
// expect(element).toBeInTheDocument();

const elOrderId = screen.getByTestId('customer_orders__element-order-id-');
expect(elOrderId).toBeInTheDocument();

const elDelivStatus = screen.getByTestId('customer_orders__element-delivery-status-');
expect(elDelivStatus).toBeInTheDocument();

const elOrderDate = screen.getByTestId('customer_orders__element-order-date-');
expect(elOrderDate).toBeInTheDocument();

const elOrdersCardPrice = screen.getByTestId('customer_orders__element-card-price-');
expect(elOrdersCardPrice).toBeInTheDocument();

// const element = screen.getByTestId('');
// expect(element).toBeInTheDocument();

const elLabelOrderId = screen.getByTestId('customer_order_details__element-order-details-label-order-id');
expect(elLabelOrderId).toBeInTheDocument();

const elLabelSellerName = screen.getByTestId('customer_order_details__element-order-details-label-seller-name');
expect(elLabelSellerName).toBeInTheDocument();

const elLabelOrderDate = screen.getByTestId('customer_order_details__element-order-details-label-order-date');
expect(elLabelOrderDate).toBeInTheDocument();

const elLabelDelivStatus = screen.getByTestId('customer_order_details__element-order-details-label-delivery-status');
expect(elLabelDelivStatus).toBeInTheDocument();

const elOrderTableItemNum = screen.getByTestId('customer_order_details__element-order-table-item-number-');
expect(elOrderTableItemNum).toBeInTheDocument();

const elOrderTableName = screen.getByTestId('customer_order_details__element-order-table-name-');
expect(elOrderTableName).toBeInTheDocument();

const elOrderTableQty = screen.getByTestId('customer_order_details__element-order-table-quantity-');
expect(elOrderTableQty).toBeInTheDocument();

const elOrderSubtotal = screen.getByTestId('customer_order_details__element-order-table-sub-total-');
expect(elOrderSubtotal).toBeInTheDocument();

const elOrderTotalPrice = screen.getByTestId('customer_order_details__element-order-total-price-');
expect(elOrderTotalPrice).toBeInTheDocument();

const elOrderUnitPrice = screen.getByTestId('customer_order_details__element-order-table-unit-price-');
expect(elOrderUnitPrice).toBeInTheDocument();

const btnDeliveryCheck = screen.getByTestId('customer_order_details__button-delivery-check');
expect(btnDeliveryCheck).toBeInTheDocument();
