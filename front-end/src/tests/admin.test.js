import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Admin from '../pages/Admin';

describe('Verifica se os elementos da tela de admin estão com os data-testids corretos', () => {
  beforeEach(() => {
    // render(<Admin />);
  });

  // afterEach(() => {
  // });
  // afterEach(cleanup);

  test('Verifica data-testid do input name.', () => {
    // render(<Admin />);
    const inputName = screen.getAllByTestId('admin_manage__input-name');
    expect(inputName).toBeInTheDocument();
  });
  
  test('Verifica data-testid do input email.', () => {
    const inputEmail = screen.getAllByTestId('admin_manage__input-email');
    expect(inputEmail).toBeInTheDocument();
  });
  
  test('Verifica data-testid do input password.', () => {
    const inputPassword = screen.getAllByTestId('admin_manage__input-password');
    expect(inputPassword).toBeInTheDocument();
  });
  
  test('Verifica data-testid do select role.', () => {
    const selectRole = screen.getAllByTestId('admin_manage__select-role');
    expect(selectRole).toBeInTheDocument();
  });
  
  test('Verifica data-testid do botão de cadastro, register.', () => {
    const btnRegister = screen.getAllByTestId('admin_manage__button-register');
    expect(btnRegister).toBeInTheDocument();
  });
  
  test('Verifica data-testid do elemento do número do item.', () => {
    const elTabItemNum = screen.getAllByTestId('admin_manage__element-user-table-item-number-');
    expect(elTabItemNum).toBeInTheDocument();
  });
  
  test('Verifica data-testid do elemento de nome do usuário.', () => {
    const elTabName = screen.getAllByTestId('admin_manage__element-user-table-name-');
    expect(elTabName).toBeInTheDocument();
  });
  
  test('Verifica data-testid do elemento do e-mail do usuário.', () => {
    const elTabEmail = screen.getAllByTestId('admin_manage__element-user-table-email-');
    expect(elTabEmail).toBeInTheDocument();
  });
  
  test('Verifica data-testid do elemento da função (role) do usuário.', () => {
    const elTabRole = screen.getAllByTestId('admin_manage__element-user-table-role-');
    expect(elTabRole).toBeInTheDocument();
  });
  
  test('Verifica data-testid do elemento de remover usuário.', () => {
    const elTabRemove = screen.getAllByTestId('admin_manage__element-user-table-remove-');
    expect(elTabRemove).toBeInTheDocument();
  });
});
