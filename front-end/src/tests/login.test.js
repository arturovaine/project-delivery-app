import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';

describe('Verifica se os elementos da tela de login estão com os data-testids corretos', () => {
  test('Verifica o input de e-mail, na tela de login, com o data-testid correto.', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeInTheDocument();
  });

  test('Verifica o input de password, na tela de login, com o data-testid correto.', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeInTheDocument();
  });

  test('Verifica o botão de login, na tela de login, com o data-testid correto.', () => {
    render(<Login />);
    const btnLogin = screen.getByTestId('common_login__button-login');
    expect(btnLogin).toBeInTheDocument();
  });
});
