import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('Verifica se os elementos da tela de login estão com os data-testids corretos', () => {
  test('Verifica se existe data-testid para elemento de input de e-mail de login (email).', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
  });

  test('Verifica se existe data-testid para elemento de input de senha do login (password).', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
  });

  test('Verifica se existe data-testid para elemento de botão de login.', () => {
    render(<Login />);
    const btnLogin = screen.getByTestId('common_login__button-login');
    expect(btnLogin).toBeInTheDocument();
  });
});
