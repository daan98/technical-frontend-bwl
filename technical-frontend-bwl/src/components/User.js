import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header'

function User(){
    const users = useSelector( state => state.users );
    const time = new Date().toLocaleString('en-GB', {hour: 'numeric', minute: 'numeric'});
    const dateString = new Date().toLocaleString('en-GB', { day:'2-digit', month: '2-digit', year:'numeric' });
    
    console.log(users);
    console.log('time: ', time);
    console.log('full date: ', dateString);
    
    return(
        <Fragment>
            <Header />
            <div className='container'>
            <h3>Lista de usuarios del sistema</h3>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo electrónico</th>
                        <th>Fecha de registro</th>
                        <th>Último login</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( user => (
                        <tr key={user._id} >
                            <Fragment>
                                <td id='name'>{user.nombre}</td>
                                <td id='email'>{user.correo}</td>
                                <td id='sign-up'>{user.registro}</td>
                                <td id='sign-in'>{user.logout}</td>
                            </Fragment>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </Fragment>
    );
}

export default User;