import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import logo from '../../../images/logo.png';
import EmailPasswordValidation from '../../../util/EmailPasswordValidation';
import Button from '../../../components/Button';
import { postRequest } from '../../../services/api';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [buttonLoginDisabled, setbuttonLoginDisabled] = useState(true);

  const history = useHistory();

  const login = async (event) => {
    event.preventDefault();

    try {
      const endpoint = '/login';

      const data = await postRequest(endpoint, { email, password });

      localStorage.setItem('user', JSON.stringify({ ...data }));
      setUserRole(data.role);
      setIsLogged(true);
    } catch (error) {
      setFailedTryLogin(true);
      setIsLogged(false);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    if (user.token) {
      setUserRole(user.role);
      setIsLogged(true);
    }
  }, []);

  useEffect(() => {
    const validation = EmailPasswordValidation(email, password);

    if (validation === true) setbuttonLoginDisabled(false);
    else setbuttonLoginDisabled(true);
  }, [email, password]);

  if (isLogged && userRole === 'seller') return <Redirect to="/seller/orders" />;
  if (isLogged && userRole === 'customer') return <Redirect to="/customer/products" />;

  return (
    <section className="login-area">
      <img src={ logo } alt="Logo do App de Delivery" />
      <form>
        <h1>App de Delivery</h1>
        <input
          data-testid="common_login__input-email"
          onChange={ ({ target: { value } }) => setEmail(value) }
          placeholder="seu-email@site.com.br"
          value={ email }
        />
        <input
          data-testid="common_login__input-password"
          onChange={ ({ target: { value } }) => setPassword(value) }
          type="password"
          placeholder="Sua senha"
          value={ password }
        />

        <Button
          disabled={ buttonLoginDisabled }
          label="LOGIN"
          buttonType="primary-button"
          testId="common_login__button-login"
          onClick={ (event) => login(event) }
        />
        <Button
          disabled={ false }
          label="Ainda não tenho conta"
          buttonType="terciary-button"
          testId="common_login__button-register"
          onClick={ () => history.push('/register') }
        />
      </form>

      {
        (failedTryLogin)
          ? (
            <p data-testid="common_login__element-invalid-email">
              {
                `O endereço de e-mail ou a senha não estão corretos.
                  Por favor, tente novamente.`
              }
            </p>
          )
          : null
      }
    </section>
  );
};

export default Login;
