import React from "react";
import Header from './Header';

function Dashboard(){
    const cloud = require("../assets/partly-cloudy-icon.png");
    const flag = require("../assets/mexico.png");
    /* let today = new Date();
    let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds(); */

    return(
        <div>
            <Header />
            <div className="grid container">
                <div className="card">
                    <h3>Clima</h3>
                    <div id="weather" className="grid card-container" >
                        <img srcSet={cloud} alt="weather"/>
                        <div id="temperature">
                            <p>29 C</p>
                            <span>Parcialmente nublado</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <h3>País seleccionado</h3>
                    <div id="country" className="grid card-container" >
                        <p>México</p>
                        <img src={flag} alt="flag" />
                    </div>
                </div>

                <div className="card">
                    <h3>Tareas pendientes</h3>
                    <div id="uncompleted-task" className="card-container" >
                        <ul>
                            <li>Ir al banco</li>
                            <li>Revisar balance general</li>
                            <li>Ajustar métricas de diseño</li>
                        </ul>
                    </div>
                </div>
                
                <div className="card">
                    <h3>Hora</h3>
                    <div id="hour" className="card-container" >
                        <p>11:15:15 P.M.</p>
                    </div>
                </div>

                <div className="card">
                    <h3>Tareas completadas</h3>
                    <div id="completed-task" className="card-container" >
                        <ul>
                            <li>Terminar la prueba</li>
                            <li>Debuggear código</li>
                            <li>Realizar pruebas unitarias</li>
                        </ul>
                    </div>
                </div>

                <div className="card">
                    <h3>Zonas horarias disponibles</h3>
                    <div id="timezone" className="card-container" >
                        <ul>
                            <li>Ciudad de México - Central</li>
                            <li>Tijuana</li>
                            <li>Monterrey</li>
                        </ul>
                    </div>
                </div>
                
                <aside className="card">
                    <h3>Paises disponibles</h3>
                    <div id="available-country" className="grid card-container" >
                        <img src={flag} alt="flag" />
                        <p>México</p>
                    </div>
                </aside> 
            </div>
        </div>
    );
}

export default Dashboard;