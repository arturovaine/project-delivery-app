import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';
import EmailPasswordValidation from '../../../util/EmailPasswordValidation';
import { postRequest } from '../../../services/api';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitButtonDisabled, setDisabled] = useState(true);
  const [failedRegister, setFailedRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const register = async (event) => {
    event.preventDefault();

    try {
      const endpoint = '/register';

      const { token, user } = await postRequest(endpoint, { name, email, password });
      console.log(user);
      console.log(token);
      // localStorage.setItem('user', JSON.stringify({ ...user, token }));
      // setLoggedIn(true);
    } catch (error) {
      setFailedRegister(true);
      setLoggedIn(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const TWELVE = 12;
    const validation = EmailPasswordValidation(email, password);
    const namevalidation = name.length >= TWELVE;

    if (validation === true && namevalidation === true) setDisabled(false);
    else setDisabled(true);
  }, [name, email, password]);

  if (loggedIn) return <Redirect to="/customer/products" />;

  return (
    <form id="register-form">
      <TextInput
        label="Nome"
        testId="common_register__input-name"
        onChange={ ({ target: { value } }) => setName(value) }
        password={ false }
        placeholder="Seu nome"
        value={ name }
      />
      <TextInput
        label="E-mail"
        testId="common_register__input-email"
        onChange={ ({ target: { value } }) => setEmail(value) }
        password={ false }
        placeholder="seu-email@site.com.br"
        value={ email }
      />
      <TextInput
        label="Senha"
        testId="common_register__input-password"
        onChange={ ({ target: { value } }) => setPassword(value) }
        password
        placeholder="Sua senha"
        value={ password }
      />

      <Button
        disabled={ isSubmitButtonDisabled }
        label="CADASTRAR"
        buttonType="primary-button"
        testId="common_register__button-register"
        onClick={ register }
      />

      {
        (failedRegister)
          ? (
            <p data-testid="common_register__element-invalid_register">
              {
                `Dados inválidos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </form>
  );
};

export default RegisterPage;
