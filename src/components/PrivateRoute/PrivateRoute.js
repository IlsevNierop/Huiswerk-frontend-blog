import React from 'react';
import {Navigate} from "react-router-dom";


function PrivateRoute({isAuthenticated, children, alternativeLink}) {
    if (isAuthenticated) {
        return children;
    }
    return <Navigate to={alternativeLink} replace/>

}

export default PrivateRoute;