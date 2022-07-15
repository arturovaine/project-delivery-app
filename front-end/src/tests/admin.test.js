import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Admin from '../pages/Admin';

describe('Verifica se os elementos da tela de admin estão com os data-testids corretos', () => {
  test('Verifica ..., na tela de admin, com o data-testid correto.', () => {
    // render(<Admin />);
    
    // itens a implementar...

    const inputName = screen.getByTestId('admin_manage__input-name');
    const inputEmail = screen.getByTestId('admin_manage__input-email');
    const inputPassword = screen.getByTestId('admin_manage__input-password');
    const selectRole = screen.getByTestId('admin_manage__select-role');
    const btnRegister = screen.getByTestId('admin_manage__button-register');

    const elTabItemNum = screen.getByTestId('admin_manage__element-user-table-item-number-');
    const elTabName = screen.getByTestId('admin_manage__element-user-table-name-');
    const elTabEmail = screen.getByTestId('admin_manage__element-user-table-email-');
    const elTabRole = screen.getByTestId('admin_manage__element-user-table-role-');
    const elTabRemove = screen.getByTestId('admin_manage__element-user-table-remove-');

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(selectRole).toBeInTheDocument();
    expect(btnRegister).toBeInTheDocument();

    expect(elTabItemNum).toBeInTheDocument();
    expect(elTabName).toBeInTheDocument();
    expect(elTabEmail).toBeInTheDocument();
    expect(elTabRole).toBeInTheDocument();
    expect(elTabRemove).toBeInTheDocument();
    
  });
});
