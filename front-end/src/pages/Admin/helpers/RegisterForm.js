import React, { useState, useEffect } from 'react';
import EmailPasswordValidation from '../../../util/EmailPasswordValidation';
// import PropTypes from 'prop-types';

const RegisterForm = () => {
  // const { name, email, password } = props;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitButtonDisabled, setDisabled] = useState(true);
  const [failedRegister, setFailedRegister] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(false);

  const register = async (event) => {
    event.preventDefault();
    try {
      const endpoint = '/register';
      const data = await postRequest(endpoint, { name, email, password });
      localStorage.setItem('user', JSON.stringify({ ...data }));
      // setLoggedIn(true);
    } catch (error) {
      setFailedRegister(true);
      // setLoggedIn(false);
    }
  };

  useEffect(() => {
    const TWELVE = 12;
    const validation = EmailPasswordValidation(email, password);
    const namevalidation = name.length >= TWELVE;

    if (validation === true && namevalidation === true) setDisabled(false);
    else setDisabled(true);
  }, [name, email, password]);

  return (
    <div>
      <section>
        <form id="register-form">
          <input
            label="Nome"
            data-testid="admin_manage__input-name"
            onChange={ ({ target: { value } }) => setName(value) }
            password={ false }
            placeholder="Seu nome"
            value={ name }
          />
          <input
            label="E-mail"
            data-testid="admin_manage__input-email"
            onChange={ ({ target: { value } }) => setEmail(value) }
            password={ false }
            placeholder="seu-email@site.com.br"
            value={ email }
          />
          <input
            label="Senha"
            type="password"
            data-testid="admin_manage__input-password"
            onChange={ ({ target: { value } }) => setPassword(value) }
            placeholder="Sua senha"
            value={ password }
          />
          <select name="role" id="role" data-testid="admin_manage__select-role">
            <option value="customer">Cliente</option>
            <option value="seller">Vendedor</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="button"
            disabled={ isSubmitButtonDisabled }
            data-testid="admin_manage__button-register"
            onClick={ register }
          >
            CADASTRAR
          </button>

          {
            (!failedRegister)
              ? (
                <p data-testid="admin_manage__element-invalid-register">
                  {
                    `Dados inválidos.
              Por favor, tente novamente.`
                  }
                </p>
              )
              : null
          }
        </form>
      </section>
    </div>
  );
};

// RegisterForm.propTypes = {
//   name: PropTypes.string.isRequired,
//   email: PropTypes.string.isRequired,
//   password: PropTypes.string.isRequired,
// };

export default RegisterForm;
