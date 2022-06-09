import React from "react";

function Header(){
    return(
        <nav className="navbar">
            <ul>
                <li>
                    <a href="https://www.google.com">Dashboard</a>
                </li>
                <li>
                    <a href="https://www.google.com">Usuarios</a>
                </li>
                <li>
                    <span>DA</span>
                    Daniel Agüero
                </li>
            </ul>
        </nav>
    )
}

export default Header;