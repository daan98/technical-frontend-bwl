import React from "react";
// import {NavLink} from 'react-router-dom'
function Register(){

    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        console.log('Hola');

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

        const inputList = document.querySelectorAll('input');
        let counter = 0;
        inputList.forEach(input => {
            if(input.attributes[3].value === 'border-color: red;') counter++ 
        });

        if(counter !== 0) {
            window.alert('Debes colocar un email y nombre valido, asegurate de que las contraseñas sean iguales. Si no hay bordes rojos el campo esta bien.');
            return;
        } else{
            window.location.pathname = '/dashboard';
        }

    };

    return(
        <div className="form-container">
            <h1>Crear cuenta</h1>
            
            <form className="grid form" onSubmit={handleOnSubmitForm}>
                <label htmlFor="email">Correo electrónico</label>
                <input id="email" type="email" placeholder="usuario@correo.com.mx" />

                <div className="grid row">
                    <div className="grid">
                        <label htmlFor="password">Contaseña</label>
                        <input id="password" type="password" placeholder="********" />
                    </div>

                    <div className="grid">
                        <label htmlFor="repeatPassword">Confirmar contraseña</label>
                        <input id="repeatPassword" type="password" placeholder="********" />
                    </div>
                </div>

                <label htmlFor="name">Nombre completo</label>
                <input id="name" type="text" placeholder="Nombre(s) y apellido(s)"/>

                {/* <NavLink to="/dashboard" className="btn" type="submit" >Registrarme</NavLink> */}
                <button className="btn" type="submit">Prueba</button>
            </form>
        </div>
    );
}

export default Register;