import React, { useState, useEffect } from 'react';
import { getRequest } from '../../services/api';
import RegisterForm from './helpers/RegisterForm';
// import Navbar from '../../components/NavBar';
import Table from './helpers/Table';
import TableHeader from './helpers/TableHeader';
import TableBody from './helpers/TableBody';

const Admin = () => {
  // const { token } = JSON.parse(localStorage.getItem('user'));
  // console.log('token:', token);
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    console.log('token:', token);
    const endpoint = 'http://localhost:3001/users';
    const allUsers = await getRequest(endpoint, token);
    setUsers(allUsers);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <main>
      {/* <Navbar /> */}
      <h1>Cadastrar novo usuário</h1>
      <div>
        <RegisterForm />
      </div>
      <h1>Lista de usuários</h1>
      {
        !isLoading
          ? (
            <Table>
              <TableHeader />
              <TableBody>
                { users.map((user, index) => (
                  <tr key={ index }>
                    <td>{ user.id }</td>
                    <td>{ user.name }</td>
                    <td>{ user.email }</td>
                    <td>{ user.role }</td>
                    <td>
                      <button
                        type="button"
                        label="Excluir"
                        data-testid="admin_manage__button-register"
                        // onClick={ removeUser(user.email) }
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </TableBody>
            </Table>
          )
          : <span>Loading...</span>
      }
    </main>
  );
};

export default Admin;

// // import { Redirect } from 'react-router-dom';
// // import TextInput from '../../components/TextInput';
// // import Button from '../../components/Button';
// // import EmailPasswordValidation from '../../util/EmailPasswordValidation';
// // import { postRequest, getRequest } from '../../services/api';

// // const Admin = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [isSubmitButtonDisabled, setDisabled] = useState(true);
// //   const [failedRegister, setFailedRegister] = useState(false);
// //   const [loggedIn, setLoggedIn] = useState(false);
// //   const [users, setUsers] = useState('');
// //   console.log('teste');
// //   const register = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const endpoint = '/register';
// //       const { token, user } = await postRequest(endpoint, { name, email, password });
// //       console.log(user);
// //       console.log(token);
// //       // localStorage.setItem('user', JSON.stringify({ ...user, token }));
// //       // setLoggedIn(true);
// //     } catch (error) {
// //       setFailedRegister(true);
// //       setLoggedIn(false);
// //     }
// //   };

// //   const usersData = async () => {
// //     try {
// //       const endpoint = '/users';
// //       // const allUsers = await getRequest(endpoint);
// //       const data = await fetch(endpoint);
// //       const { results } = await data.json();
// //       return results;
// //     } catch (error) {
// //     }
// //   };

// //   useEffect(() => {
// //     const endpoint = '/users';
// //     const allUsers = async () => await getRequest(endpoint);
// //     setUsers(allUsers);

// //     const TWELVE = 12;
// //     const validation = EmailPasswordValidation(email, password);
// //     const namevalidation = name.length >= TWELVE;

// //     if (validation === true && namevalidation === true) setDisabled(false);
// //     else setDisabled(true);
// //   }, [name, email, password]);

// //   if (loggedIn) return <Redirect to="/admin/manage" />;

// //   return (
// //     <main>
// //       <section>
// //         <form id="register-form">
// //           <header>Cadastrar novo usuário</header>
// //           <TextInput
// //             label="Nome"
// //             testId="admin_manage__input-name"
// //             onChange={ ({ target: { value } }) => setName(value) }
// //             password={ false }
// //             placeholder="Seu nome"
// //             value={ name }
// //           />
// //           <TextInput
// //             label="E-mail"
// //             testId="admin_manage__input-email"
// //             onChange={ ({ target: { value } }) => setEmail(value) }
// //             password={ false }
// //             placeholder="seu-email@site.com.br"
// //             value={ email }
// //           />
// //           <TextInput
// //             label="Senha"
// //             testId="admin_manage__input-password"
// //             onChange={ ({ target: { value } }) => setPassword(value) }
// //             password
// //             placeholder="Sua senha"
// //             value={ password }
// //           />
// //           <select name="role" id="role" data-testid="admin_manage__select-role">
// //             <option value="customer">Cliente</option>
// //             <option value="seller">Vendedor</option>
// //             <option value="admin">Admin</option>
// //           </select>

// //           <Button
// //             disabled={ isSubmitButtonDisabled }
// //             label="CADASTRAR"
// //             buttonType="primary-button"
// //             testId="admin_manage__button-register"
// //             onClick={ register }
// //           />

// //           {
// //             (failedRegister)
// //               ? (
// //                 <p data-testid="common_register__element-invalid_register">
// //                   {
// //                     `Dados inválidos.
// //                       Por favor, tente novamente.`
// //                   }
// //                 </p>
// //               )
// //               : null
// //           }
// //         </form>
// //       </section>
// //       <section>
// //       </section>
// //     </main>
// //   );
// // };
//          {
//             (failedRegister)
//               ? (
//                 <p data-testid="common_register__element-invalid_register">
//                   {
//                     `Dados inválidos.
//                       Por favor, tente novamente.`
//                   }
//                 </p>
//               )
//               : null
//           }
//         </form>
//       </section>
//       <section>
//         <table>
//           <TableHeader />
//           <tbody>
//             {/* { users.map((user) => {
//               return (
//                 <tr key={ user.id }>
//                   <td>{ user.id }</td>
//                   <td>{ user.name }</td>
//                   <td>{ user.email }</td>
//                   <td>{ user.role }</td>
//                   <td>
//                     <Button
//                       label="Excluir"
//                       buttonType="primary-button"
//                       testId="admin_manage__element-user-table-remove-"
//                       // onClick={ removeUser(user.email) }
//                     />
//                   </td>
//                 </tr>
//               );
//             })} */}
//           </tbody>
//         </table>
//       </section>
//     </main>
//   );
// };

// export default Admin;
