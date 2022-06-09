import React from "react";

function Register(){
    return(
        <div className="form-container">
            <h1>Crear cuenta</h1>
            
            <form className="grid form">
                <label>Correo electrónico</label>
                <input type="email" placeholder="usuario@correo.com.mx" />

                <div className="grid row">
                    <div className="grid">
                        <label>Contaseña</label>
                        <input type="password" placeholder="********" />
                    </div>

                    <div className="grid">
                        <label>Confirmar contraseña</label>
                        <input type="password" placeholder="********" />
                    </div>
                </div>

                <label>Nombre completo</label>
                <input type="text" placeholder="Nombre(s) y apellido(s)"/>

                <button className="btn" type="submit">Registrarme</button>
            </form>
        </div>
    );
}

export default Register;