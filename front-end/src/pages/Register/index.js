import React, { useState } from 'react';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <>
      <div id="register-form">
        <TextInput
          label="Nome"
          testId="common_register__input-name"
          password={ false }
          placeholder="Seu nome"
        />
        <TextInput
          label="E-mail"
          testId="common_register__input-email"
          password={ false }
          placeholder="seu-email@site.com.br"
        />
        <TextInput
          label="Senha"
          testId="common_register__input-password"
          password={ true }
          placeholder="Sua senha"
        />

        <Button
          label="Login"
          style=""
          testId="common_register__button-register"
          onClick={ null }
        />
      </div>
    </>
  )
}

export default RegisterPage;
