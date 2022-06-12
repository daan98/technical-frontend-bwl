import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUsers } from "../actions/UserActions";
// import {NavLink} from 'react-router-dom'
function Register(){
    const createUserDispatch = useDispatch();
    const userState = {
        id: null,
        nombre: '',
        nombrecito: '',
        contraseña: '',
        correo: '',
        registro: '',
        logout: ''
    }
    const [user, setUser] = useState(userState)
    const [name, setName] = useState(userState.nombre);
    const [shortName, setShortName] = useState(userState.nombrecito);
    const [password, setPassword] = useState(userState.contraseña);
    const [password2, setPassword2] = useState(userState.contraseña);
    const [email, setEmail] = useState(userState.correo);
    const [register, setRegister] = useState(userState.registro);
    const [logout, setLogout] = useState(userState.logout);
    
    const handleOnSubmitForm = (e) => {
        e.preventDefault();

        const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');
        const repeatPassword = document.querySelector('#repeatPassword')
        const name = document.querySelector('#name');

        if(email.value.toLowerCase().match(pattern)) email.style.borderColor = 'var(--sky-blue)';
        else email.style.borderColor = 'red';

        if(repeatPassword.value !== password.value || repeatPassword.value === '' || password.value === ''){
            password.style.borderColor = 'red';
            repeatPassword.style.borderColor = 'red';
        } else{
            password.style.borderColor = 'var(--sky-blue)';
            repeatPassword.style.borderColor = 'var(--sky-blue)';
        }
        
        if(name.value.length >= 15 && name.value.length <= 50) name.style.borderColor = 'var(--sky-blue)';
        else name.style.borderColor = 'red';

        const inputList = document.querySelectorAll('input'); // Accedemos a todos los inputs para poder recorrerlos en busca de campos vacios
        let counter = 0;
        
        inputList.forEach(input => {
            if(input.attributes[3].value === 'border-color: red;') counter++ // Si hay algún campo vacio el contador aumenta en 1 y así no se permite seguir
        });

        if(counter !== 0) {
            
            window.alert('Debes colocar un email y nombre valido, asegurate de que las contraseñas sean iguales. Si no hay bordes rojos el campo esta bien.');
            return;

        } else{
            // Obteniendo valores de fecha actual, hora y nombre acortado
            const register = new Date().toLocaleString('en-GB', { day:'2-digit', month: '2-digit', year:'numeric' });
            const time = new Date().toLocaleString('en-GB', {hour: 'numeric', minute: 'numeric'});  // cambiar valor de locales a 'en-US' si se desea tiempo de 12 horas y usar time.slice(0, -3) para quitar el A.M/P.M
            const lastLogin = register + ' ' + time;
            const nameSeparate = name.value.split(' ');
            const shortName = nameSeparate[0] + ' ' + nameSeparate[2];

            // Subiendo la información a la base de datos
            createUserDispatch(createUsers(name.value, shortName, password.value, email.value, register, lastLogin)) // PONER DENTRO DEL 'handleOnSubmitForm'
            .then( data => {
                setUser({
                    id: '1', // Valor por defecto ya que se usara '_id' y NO id
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

    };

    return(
        <div className="form-container">
            <h1>Crear cuenta</h1>
            
            <form className="grid form" onSubmit={handleOnSubmitForm}>
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email" placeholder="usuario@correo.com.mx" onChange={ (e) => setEmail(e.target.innerText) } />

                <div className="grid row">
                    <div className="grid">
                        <label htmlFor="password">Contaseña</label>
                        <input id="password" type="password" placeholder="********" onChange={ (e) => setPassword(e.target.innerText) } />
                    </div>

                    <div className="grid">
                        <label htmlFor="repeatPassword">Confirmar contraseña</label>
                        <input id="repeatPassword" type="password" placeholder="********" onChange={ (e) => setPassword2(e.target.innerText) } />
                    </div>
                </div>

                <label htmlFor="name">Nombre completo</label>
                <input id="name" type="text" placeholder="Nombre(s) y apellido(s)" onChange={ (e) => {
                    setName(e.target.innerText);
                    } } />

                {/* <NavLink to="/dashboard" className="btn" type="submit" >Registrarme</NavLink> */}
                <button className="btn" type="submit">Prueba</button>
            </form>
        </div>
    );
}

export default Register;