import React from "react";

function Login(){
    return(
        <div className="form-container">
            <h1>Bienvenido</h1>
            
            <form className="form">
                <label>Correo electrónico</label>
                <input type="email" placeholder="usuario@correo.com.mx" />

                <label>Contaseña</label>
                <input type="password" placeholder="********" />

                <button className="btn" type="submit">Iniciar sesión</button>

                <div className="row">
                    <span>¿No tienes cuenta?</span>
                    <a href="https://www.google.com" className="register-link">Registrarme</a>
                </div>
            </form>
        </div>
    )
}

export default Login;