import React, { Fragment } from 'react';
import Header from './Header'

function User(){
    
    const time = new Date().toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric'});
    const dateString = new Date().toLocaleString('en-GB', { day:'2-digit', month: '2-digit', year:'numeric' });
    
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
                    <tr>
                        <td id='name'>Angel Damián Martínez Delfín</td>
                        <td id='email'>dmartinez@bwl.com.mx</td>
                        <td id='sign-up'>21/04/2021</td>
                        <td id='sign-in'>22/04/2021 11:25</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </Fragment>
    );
}

export default User;