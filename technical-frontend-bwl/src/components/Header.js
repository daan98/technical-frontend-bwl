import React from "react";
import {NavLink} from 'react-router-dom'

function Header(){
    return(
        <nav className="navbar">
            <NavLink to="/dashboard" style={({isActive}) => {
                        return{ backgroundColor: isActive ? "#0183FC" : "transparent" };
                    }}>Dashboard</NavLink>
            <NavLink to="/usuario" style={({isActive}) => {
                return{ backgroundColor: isActive ? "#0183FC" : "transparent" };
            }}>Usuarios</NavLink>
            <p><span>DA</span> Daniel Agüero</p>
        </nav>
    )
}

export default Header;