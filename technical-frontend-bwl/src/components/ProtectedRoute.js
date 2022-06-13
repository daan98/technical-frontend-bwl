/* import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }){
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    
    return(
        isAuthenticated ? children : <Navigate to="/registro" />
    );
}

export default ProtectedRoute;
SE PUEDE PROHIBIR AL USUARIO VOSOTAR UNA URL ESPECIFICA SI NO CUMPLE LA CONDICIÓN (USA LocalStorage)
*/

