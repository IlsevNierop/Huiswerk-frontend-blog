import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Nav.module.css";

function Nav({isAuth, setAuthenticated}) {

    return (
        <>
            <div className={`outer-container ${styles["nav-outer"]}`}>
                <nav className={`inner-container ${styles["nav-inner"]}`}>
                    <ul className={styles["nav-ul"]}>
                        <li className={styles["nav-li"]}><Link to="/">Home</Link></li>
                        {isAuth && <li className={styles["nav-li"]}><Link to="/blogposts">Blogposts</Link></li>}
                        {!isAuth && <li className={styles["nav-li"]}><Link to="/login">Login</Link></li>}
                    </ul>
                    {isAuth && <button className={styles["nav-button"]} type="button"
                                       onClick={() => setAuthenticated(isAuth === false)}>Uitloggen</button>}
                </nav>
            </div>
        </>
    )
}

export default Nav;