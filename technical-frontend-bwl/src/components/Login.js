import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateUser } from "../actions/UserActions";

function Login(){
    const userState = {
        id: null,
        nombre: '',
        nombrecito: '',
        contraseña: '',
        correo: '',
        registro: '',
        logout: ''
    };
    const [, setUser] = useState(userState)
    const users = useSelector( state => state.users );
    const updateUserDispatch = useDispatch();

    console.log(users);

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(e);
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        
        
        if( email.value === '') email.style.borderColor = 'red';
        else email.style.borderColor = 'var(--sky-blue)';

        if( password.value === '') password.style.borderColor = 'red';
        else password.style.borderColor = 'var(--sky-blue)';

        const inputList = document.querySelectorAll('input'); // Accedemos a todos los inputs para poder recorrerlos en busca de campos vacios
        let counter = 0;
        
        inputList.forEach(input => {
            if(input.attributes[3].value === 'border-color: red;') counter++ // Si hay algún campo vacio el contador aumenta en 1 y así no se permite seguir
        });

        if(counter !== 0) {
            
            window.alert('Usuario o contraseña incorrectos');
            return;

        } else{
            // Obteniendo hora del login y usuario
            const result = users.filter( user => user.correo === email.value );
            const register = new Date().toLocaleString('en-GB', { day:'2-digit', month: '2-digit', year:'numeric' });
            const time = new Date().toLocaleString('en-GB', {hour: 'numeric', minute: 'numeric'});  // cambiar valor de locales a 'en-US' si se desea tiempo de 12 horas y usar time.slice(0, -3) para quitar el A.M/P.M
            const lastLogin = register + ' ' + time;
            
            console.log(result);
            console.log(email.value);
            result[0].logout = lastLogin;

            // Actualizando la información en la base de datos
            updateUserDispatch( updateUser(result[0]._id, result[0]))
                .then( data => {
                    setUser({
                        id: result[0]._id, // Valor por defecto ya que se usara '_id' y NO id
                        nombre: data.nombre,
                        nombrecito: data.nombrecito,
                        contraseña: data.contraseña,
                        correo: data.correo,
                        registro: data.registro,
                        logout: data.logout
                    });
                });

            window.location.pathname = '/dashboard';
        }
    }

    return(
        <div className="form-container">
            <h1>Bienvenido</h1>
            
            <form className="grid form" onSubmit={onSubmitForm}>
                <label>Correo electrónico</label>
                <input id="email" type="email" placeholder="usuario@correo.com.mx" />

                <label>Contaseña</label>
                <input id="password" type="password" placeholder="********" />

                <button className="btn" type="submit">Iniciar sesión</button>

                <div className="grid row">
                    <span>¿No tienes cuenta?</span>
                    <NavLink to="/registro" className="register-link">Registrarne</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login;