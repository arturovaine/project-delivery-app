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
                    <td
                      data-testid={
                        `admin_manage__element-user-table-item-number-${index}`
                      }
                    >
                      { user.id }
                    </td>
                    <td
                      data-testid={ `admin_manage__element-user-table-name-${index}` }
                    >
                      { user.name }
                    </td>
                    <td
                      data-testid={ `admin_manage__element-user-table-email-${index}` }
                    >
                      { user.email }
                    </td>
                    <td
                      data-testid={ `admin_manage__element-user-table-role-${index}` }
                    >
                      { user.role }
                    </td>
                    <td>
                      <button
                        type="button"
                        label="Excluir"
                        data-testid={ `admin_manage__element-user-table-remove-${index}` }
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
