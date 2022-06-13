import React from "react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'

function Header(){
    const users = useSelector( state => state.users );
    const time = new Date().toLocaleString('en-GB', {hour: 'numeric', minute: 'numeric'});  // cambiar valor de locales a 'en-US' si se desea tiempo de 12 horas y usar time.slice(0, -3) para quitar el A.M/P.M
    console.log(time);
    const date = new Date().toLocaleString('en-GB', { day:'2-digit', month: '2-digit', year:'numeric' });
    console.log(users);
    const result = users.filter( user => user.logout === date + ' ' + time ); // Detectando quien esta logueado

    console.log(result);

    // Detectando iniciales del usuario
    const nameInitial = (name) => {
        const separatedName = name.split(' ');
        const nameInitials = separatedName[0].charAt(0) + separatedName[1].charAt(0);

        return nameInitials;
    }

    return(
        <nav className="navbar">
            <NavLink to="/dashboard" style={({isActive}) => {
                        return{ backgroundColor: isActive ? "#0183FC" : "transparent" };
                    }}>Dashboard</NavLink>
            <NavLink to="/usuario" style={({isActive}) => {
                return{ backgroundColor: isActive ? "#0183FC" : "transparent" };
            }}>Usuarios</NavLink>
            { result.map( res => (
                <p><span>{ nameInitial(res.nombrecito) }</span> {res.nombrecito}</p>
            )) }
        </nav>
    )
}

export default Header;