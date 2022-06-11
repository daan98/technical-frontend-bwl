import axios from "axios";
import moment from "moment";
import React, {useState, useEffect, Fragment} from "react";
import Header from './Header';

function Dashboard(){
    const [weather, setWeather] = useState([]);
    const [clock, setClock] = useState('');
    let [timezone, setTimezone] = useState('');
    const key = 'abc55348044d4260bad201612220906';
    let state = 'las vegas';    
    const cities = [
        {
            country: 'Mexico',
            flag: require("../assets/mexico.png"),
            timezone: ['Ciudad de México - Central', 'Tijuana', 'Monterrey'],
            pais: 'México',
        },
        {
            country: 'Argentina',
            flag: require("../assets/argentina.png"),
            timezone: ['Buenos Aires'],
            pais: 'Argentina',
        },
        {
            country: 'United States of America',
            flag: require("../assets/eeuu.png"),
            timezone: ['Pacífico - Nevada', 'Montaña - Colorado', 'Central - Oklahoma', 'Este - Virginia'],
            pais: 'Estados Unidos',
        },
    ];

    //IMPRIMIR UNA ALERTA QUE ESPECIFIQUE LA HORA
    /* const handleOnClickTimeZone = (timezone, prueba) => {
        console.log(prueba);
        // const timezones = document.querySelector('#timezone ul li');
        const time = new Date();
        let hour = time.getHours()
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ampm = 'AM';

        console.log(timezone);
        if(timezone === 'Pacifico - Nevada'){
            state = 'las vegas';
            hour -= 2;
            console.log(hour);
        } else if(timezone === 'Montaña - Colorado'){
            state = 'denver';
            hour -= 1;
        } else if(timezone === 'Central - Oklahoma'){
            state = 'oklahoma city';
        } else if(timezone === 'Este - Virginia'){
            state = 'virginia beach';
            hour += 1;
        } else if(timezone === 'Buenos Aires'){
            state = 'buenos aires';
            hour += 2;
        } else{
            console.log('TIMEZONE: ' + timezone + 'HOUR: ' + hour);
            setClock(time.toLocaleTimeString('en-US'));
            return;
        }
        console.log(hour);

        // Detectando cuando es de mañana o tarde
        
        if(hour > 12) {
            hour -= 12
            ampm = 'PM'
        }else if(hour === 0) {
            hour = 12
            ampm = 'AM';
        }else if(hour === -2){
            hour = 10;
            ampm = 'PM';
        } else if(hour === -1){
            hour = 11;
            ampm = 'PM';
        } else if(hour === 12) ampm = 'PM'
        

        // Colocando un cero para mostrar siempre 2 digitos
        if(hour.toString().length === 1) hour = `0${hour}`;
        if(minutes.toString().length === 1) minutes = `0${minutes}`;
        if(seconds.toString().length === 1) seconds = `0${seconds}`;

        const timeString = `${hour}:${minutes}:${seconds} ${ampm}`;
        // time.toLocaleTimeString('en-US')
        setClock(timeString);
    }; */
    
    // Use Effect para traer la información de weatherapi
    useEffect( () => {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${state}&aqi=yes`)
        .then( res => {
            const data = [res.data];
            setWeather(data);
        })
        .catch( error =>
            console.log(error));
    }, []);
    
        
    // Use Effect para el reloj en tiempo real capaz de manejar sonas horarias
    useEffect( () => {
        setInterval(() => {
            console.log(timezone);
            const m = moment();
            let change = m;
            let time;

            if(timezone === 'Pacífico - Nevada'){
                change.subtract(2, 'hours');
                state = 'las vegas'
            } else if(timezone === 'Montaña - Colorado'){
                change.subtract(1, 'hours');
                state = 'denver'
            } else if(timezone === 'Central - Oklahoma'){
                state = 'oklahoma city'
            } else if(timezone === 'Este - Virginia'){
                change.add(1, 'hours');
                state = 'carolina beach'
            }else if(timezone === 'Buenos Aires'){
                change.add(2, 'hours');
                state = 'buenos aires'
            }

            time = change.format('hh:mm:ss A');
            setClock('');
            setClock(time);
            
            // const time = new Date();
            /* let hour = time.getHours()
            let minutes = time.getMinutes();
            let seconds = time.getSeconds();
            let ampm = 'AM'; */
            
            //PASAR handleOnClickTimeZone JUSTO AQUI
            /* handleOnClickTimeZone(timezone); */

            /* // Detectando cuando es de mañana o tarde
            if(hour > 12) {
                hour -= 12
                ampm = 'PM'
            }else if(hour === 0) {
                hour = 12
                ampm = 'AM';
            } else if(hour === 12) ampm = 'PM'

            // Colocando un cero para mostrar siempre 2 digitos
            if(hour.toString().length === 1) hour = `0${hour}`;
            if(minutes.toString().length === 1) minutes = `0${minutes}`;
            if(seconds.toString().length === 1) seconds = `0${seconds}`;

            const timeString = `${hour}:${minutes}:${seconds} ${ampm}`;
            // time.toLocaleTimeString('en-US')
            setClock(timeString); */
        }, 1000)
    }, [timezone]);


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
                        <p>{clock}</p>
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
                                                const empty = ''
                                                setTimezone(empty);
                                                setTimezone(e.target.innerText);
                                                /* handleOnClickTimeZone(timezone, time); */
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
                            <p>{city.pais}</p>
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