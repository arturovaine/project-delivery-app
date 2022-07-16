import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/Register';

const MOCK_NAME = 'mock-name';
const MOCK_EMAIL = 'mail@example.com';
const MOCK_PASSWORD = 'password_example';

describe('Verifica se os elementos da tela de cadastro estão com os data-testids corretos', () => {
  test('Verifica se existe data-testid para elemento de cadastro de nome (name).', () => {
    render(<Register />);
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeInTheDocument();
  });

  test('Verifica se existe data-testid para elemento de cadastro de e-mail (email).', () => {
    render(<Register />);
    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeInTheDocument();
  });
  
  test('Verifica se existe data-testid para elemento de botão de cadastro de nome.', () => {
    render(<Register />);
    // const btnRegister = screen.getByTestId('common_login__button-register'); verificar se data-testid está correto
    const btnRegister = screen.getByTestId('common_register__button-register');
    expect(btnRegister).toBeInTheDocument();
  });

  test('Verifica se existe data-testid do elemento de erro de cadastro.', () => {
    render(<Register />);
    
    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    // const elementInvalidEmail = screen.getByTestId('common_login__element-invalid-email');
    const elementInvalidRegister = screen.getByTestId('common_register__element-invalid_register');
    
    userEvent.type(inputName, MOCK_NAME);
    userEvent.type(inputEmail, MOCK_EMAIL);
    userEvent.type(inputPassword, MOCK_PASSWORD);
    
    const btnRegister = screen.getByTestId('common_register__button-register');
    userEvent.click(btnRegister);
    expect(elementInvalidRegister).toBeInTheDocument();

    userEvent.click(btnRegister);
    expect(elementInvalidRegister).toBeInTheDocument();
  });
});
