import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.png';
// import Header from '../components/Header';
// import { requestLogin } from '../services/requests';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //  const [isLogged, setIsLogged] = useState(false);
  //  const [failedTryLogin, setFailedTryLogin] = useState(false);
  const [buttonLoginDisabled, setbuttonLoginDisabled] = useState(true);

  const history = useHistory();

  // const login = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const endpoint = '/login';

  //     const { token, user } = await requestLogin(endpoint, { email, password });

  //     localStorage.setItem('user', JSON.stringify({ token, ...user }));
  //     setIsLogged(true);
  //   } catch (error) {
  //     setFailedTryLogin(true);
  //     setIsLogged(false);
  //   }
  // };

  /*   useEffect(() => {
    setFailedTryLogin(false);
  }, [email, password]);

  if (isLogged) return <Redirect to="" />; */

  useEffect(() => {
    const number = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validEmail = emailRegex.test(email);
    const validPassword = password.length >= number;

    if (validEmail === true && validPassword === true) setbuttonLoginDisabled(false);
    else setbuttonLoginDisabled(true);
  }, [email, password]);

  return (
    <section className="login-area">
      <img src={ logo } alt="Logo do App de Delivery" />
      <form>
        <h1>App de Delivery</h1>
        <label htmlFor="email-input">
          <input
            className="login_input"
            type="text"
            value={ email }
            onChange={ ({ target: { value } }) => setEmail(value) }
            data-testid="1"
            placeholder="Email"
          />
        </label>
        <label htmlFor="password-input">
          <input
            className="password_input"
            type="password"
            value={ password }
            onChange={ ({ target: { value } }) => setPassword(value) }
            data-testid="2"
            placeholder="Senha"
          />
        </label>
        {/*         {
          (failedTryLogin)
            ? (
              <p data-testid="5">
                {
                  `O endereço de e-mail ou a senha não estão corretos.
                    Por favor, tente novamente.`
                }
              </p>
            )
            : null
        } */}
        <button
          data-testid="3"
          type="submit"
          disabled={ buttonLoginDisabled }
          onClick={ (event) => login(event) }
        >
          LOGIN
        </button>
        <button
          data-testid="4"
          type="submit"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
      </form>
    </section>
  );
};

export default Login;
