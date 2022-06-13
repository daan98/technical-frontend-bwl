import axios from "axios";
import moment from "moment";
import React, {useState, useEffect, Fragment} from "react";
import Header from './Header';

function Dashboard(){
    const [weather, setWeather] = useState([]);
    const [clock, setClock] = useState('');
    const [city, setCity] = useState('ciudad de mexico');
    const key = ''; // Por razones de seguridad se deja este valor vacio
    let selectedTimezone = ''; 
    const timezone = ['Las Vegas', 'Denver', 'Atlanta', 'Buenos Aires']; // Zonas horarias disponible en la app
    const cities = [
        {
            country: 'Mexico',
            flag: require("../assets/mexico.png"),
            timezone: ['Ciudad de México - Central', 'Tijuana', 'Monterrey'],
            zona: 'ciudad de mexico',
            pais: 'México',
        },
        {
            country: 'Argentina',
            flag: require("../assets/argentina.png"),
            timezone: ['Buenos Aires'],
            zona: 'buenos aires',
            pais: 'Argentina',
        },
        {
            country: 'United States of America',
            flag: require("../assets/eeuu.png"),
            timezone: ['Las Vegas', 'Denver', 'Oklahoma City', 'Atlanta'],
            zona: 'oklahoma city',
            pais: 'Estados Unidos',
        },
    ];
    const paragraph = document.createElement('p');
    const hourContainer = document.getElementById('hour');

    paragraph.setAttribute('id', 'new-hour')

    // Cuando se da click a algun elemento de la lista de zonas horarias
    const handleOnClickTimeZone = () => {
        const m = moment();
        let change = m;
        let time;
        
        const result = timezone.filter(zone => zone === selectedTimezone); // Detectando la zona horaria
        if(result[0] === 'Las Vegas'){
            paragraph.innerText = `${result[0]} ${change.subtract(2, 'hours').format('hh:mm:ss A')}`;
            hourContainer.appendChild(paragraph);
        } else if(result[0] === 'Denver'){
            paragraph.innerText = `${result[0]} ${change.subtract(1, 'hours').format('hh:mm:ss A')}`;
            hourContainer.appendChild(paragraph);
        } else if(result[0] === 'Oklahoma City'){
        } else if(result[0] === 'Atlanta'){
            paragraph.innerText = `${result[0]} ${change.add(1, 'hours').format('hh:mm:ss A')}`;
            hourContainer.appendChild(paragraph);
        }else if(result[0] === 'Buenos Aires'){
            paragraph.innerText = `${result[0]} ${change.add(2, 'hours').format('hh:mm:ss A')}`;
            hourContainer.appendChild(paragraph);
        }

        time = change.format('hh:mm:ss A');
        setClock(time);
    };
    
    // Use Effect para traer la información de weatherapi
    useEffect( () => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=yes`)
        .then( res => {
            const data = [res.data];
            setWeather(data);
        })
        .catch( error =>
            console.log(error));
    }, [city]);
    
    // Use Effect para el reloj en tiempo real capaz de manejar sonas horarias
    useEffect( () => {
        setInterval(() => {
            handleOnClickTimeZone();
        }, 1000);
    });

    return(
        <div>
            <Header />
            <div className="grid container">
                { weather.map( info => (
                    <Fragment>
                        <div className="card">
                            <h3>Clima</h3>

                            <div id="weather" className="grid card-container" >
                                <img srcSet={info.current.condition.icon} alt="weather"/>
                                <div id="temperature">
                                    <p>{info.current.temp_c} C</p>
                                    <span>{info.current.condition.text}</span>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <h3>País seleccionado</h3>
                            <div id="country" className="grid card-container" >
                                <p>{cities.filter(city => city.country === info.location.country )[0].pais}</p> {/* Filtrando valores en cities para mostrar el país seleccionado */}
                                <img src={cities.filter(city => city.country === info.location.country )[0].flag} alt="flag" />
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
                                <p id="official-hour" >{clock}</p>
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
                                    { cities.map( city => {
                                        if(info.location.country === city.country){
                                            return(
                                                city.timezone.map( time => (
                                                    <li onClick={(e) => {
                                                        setCity(e.target.innerText);
                                                        document.querySelectorAll('p#new-hour').forEach( item => item.style.display = 'none' ); // Eliminando los horarios adicoinales mostrandose
                                                        selectedTimezone = e.target.innerText; // cambiando la zona a mostrar
                                                    }}>{time}</li>
                                                ))
                                            );
                                        } else return(false)
                                        }) }
                                </ul>
                            </div>
                        </div>
                    
                        <aside className="card">
                            <h3>Paises disponibles</h3>
                            { cities.map( city => (
                                <div id="available-country" className="grid card-container" >
                                    <img src={city.flag} alt="flag" />
                                    <p onClick={() => {
                                        setCity(city.zona);
                                        document.querySelectorAll('p#new-hour').forEach( item => item.style.display = 'none' );
                                        }}>{city.pais}</p>
                                </div>
                            )) }
                        </aside>
                    </Fragment>
                )) } 
            </div>
        </div>
    );
}

export default Dashboard;