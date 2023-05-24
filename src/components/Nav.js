import React from 'react';
import {Link} from "react-router-dom";
import './Nav.css';

function Nav({isAuth, setAuthenticated}) {

    return (
        <nav>
            <ul className = "nav-ul">
                <li className = "nav-li"><Link to="/">Home</Link></li>
                {isAuth && <li className = "nav-li"><Link to="/blogposts">Blogposts</Link></li>}
                {!isAuth && <li className = "nav-li"><Link to="/login">Login</Link></li>}
            </ul>
            {isAuth && <button type="button" onClick={() => setAuthenticated(isAuth === false)}>Uitloggen</button>}
        </nav>
    )
}

export default Nav;