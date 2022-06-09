import React from 'react';

function User(){
    return(
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
    );
}

export default User;