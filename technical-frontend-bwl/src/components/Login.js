import React from "react";
import { NavLink } from "react-router-dom";

function Login(){

    const onSubmitForm = (e) => {
        console.log(e);
        console.log('Hola Form');
    }

    return(
        <div className="form-container">
            <h1>Bienvenido</h1>
            
            <form className="grid form" onSubmit={onSubmitForm}>
                <label>Correo electrónico</label>
                <input type="email" placeholder="usuario@correo.com.mx" />

                <label>Contaseña</label>
                <input type="password" placeholder="********" />

                <NavLink to="/dashboard" className="btn" type="submit">Iniciar sesión</NavLink>

                <div className="grid row">
                    <span>¿No tienes cuenta?</span>
                    <NavLink to="/registro" className="register-link">Registrarne</NavLink>
                </div>
            </form>
        </div>
    )
}

export default Login;