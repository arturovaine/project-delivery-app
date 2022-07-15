import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Admin from '../pages/Admin';

describe('Verifica se os elementos da tela de admin estão com os data-testids corretos', () => {
  test('Verifica ..., na tela de admin, com o data-testid correto.', () => {
    // render(<Admin />);

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

// itens a implementar...

// const inputName = screen.getByTestId('admin_manage__input-name');
// expect(inputName).toBeInTheDocument();

// const inputEmail = screen.getByTestId('admin_manage__input-email');
// expect(inputEmail).toBeInTheDocument();

// const inputPassword = screen.getByTestId('admin_manage__input-password');
// expect(inputPassword).toBeInTheDocument();

// const selectRole = screen.getByTestId('admin_manage__select-role');
// expect(selectRole).toBeInTheDocument();

// const btnRegister = screen.getByTestId('admin_manage__button-register');
// expect(btnRegister).toBeInTheDocument();

// // const element = screen.getByTestId('');
// // expect(element).toBeInTheDocument();

// const elTabItemNum = screen.getByTestId('admin_manage__element-user-table-item-number-');
// expect(elTabItemNum).toBeInTheDocument();

// const elTabName = screen.getByTestId('admin_manage__element-user-table-name-');
// expect(elTabName).toBeInTheDocument();

// const elTabEmail = screen.getByTestId('admin_manage__element-user-table-email-');
// expect(elTabEmail).toBeInTheDocument();

// const elTabRole = screen.getByTestId('admin_manage__element-user-table-role-');
// expect(elTabRole).toBeInTheDocument();

// const elTabRemove = screen.getByTestId('admin_manage__element-user-table-remove-');
// expect(elTabRemove).toBeInTheDocument();
