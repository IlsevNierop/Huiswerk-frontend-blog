import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({isAuth, setAuthenticated}) {

    return (
        <nav className ={styles["nav"]}>
            <ul className ={styles["nav-ul"]}>
                <li className = {styles["nav-li"]}><Link to="/">Home</Link></li>
                {isAuth && <li className = {styles["nav-li"]}><Link to="/blogposts">Blogposts</Link></li>}
                {!isAuth && <li className = {styles["nav-li"]}><Link to="/login">Login</Link></li>}
            </ul>
            {isAuth && <button className={styles ["nav-button"]} type="button" onClick={() => setAuthenticated(isAuth === false)}>Uitloggen</button>}
        </nav>
    )
}

export default Nav;