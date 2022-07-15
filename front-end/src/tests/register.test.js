import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/Register';

const MOCK_NAME = 'mock-name';
const MOCK_EMAIL = 'mail@example.com';
const MOCK_PASSWORD = 'password_example';

describe('Verifica se os elementos da tela de cadastro estão com os data-testids corretos', () => {
  test('Verifica o botão de cadastro, na tela register, com o data-testid correto.', () => {
    render(<Register />);
    const btnRegister = screen.getByTestId('common_login__button-register');
    expect(btnRegister).toBeInTheDocument();
  });

  test('Verifica o elemento de erro de cadastro, da tela register, com o data-testid correto.', () => {
    render(<Register />);
    
    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    // const elementInvalidEmail = screen.getByTestId('common_login__element-invalid-email');
    const elementInvalidRegister = screen.getByTestId('common_register__element-invalid_register');
    
    userEvent.type(inputName, MOCK_NAME);
    userEvent.type(inputEmail, MOCK_EMAIL);
    userEvent.type(inputPassword, MOCK_PASSWORD);
    
    const btnRegister = screen.getByTestId('common_login__button-register');
    userEvent.click(btnRegister);
    expect(elementInvalidRegister).toBeInTheDocument();

    userEvent.click(btnRegister);
    expect(elementInvalidRegister).toBeInTheDocument();
  });
});
