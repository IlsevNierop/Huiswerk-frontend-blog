import React, {useState} from 'react';
import users from '../../data/users.json';
import {useNavigate} from "react-router-dom";
import styles from "./Login.module.css";

function Login({isAuth, setAuthenticated}) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    function authentication(e) {
        console.log(isAuth);
        setError(false);
        e.preventDefault();
        users.map((user) => {
            if (user.user === `${userName}` && user.password === `${password}`) {
                console.log(user);
                setAuthenticated(prev => !prev);
                console.log(isAuth);
                navigate("/blogposts");

            }
            return setError(true);
        })

    }

    return (
        <>
            <div className="outer-container">
                <article className={`inner-container ${styles["login-inner"]}`}>
                    <h1>Login pagina</h1>
                    <p>Log hier in om alle blogposts te kunnen lezen</p>
                    <form className={styles["form-login"]} onSubmit={authentication}>
                        <label className={styles["input-field"]} htmlFor="userName">Gebruikersnaam
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
                                   placeholder="Vul hier je gebruikersnaam"/>
                        </label>
                        <label className={styles["input-field"]} htmlFor="password">Wachtwoord
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                   placeholder="Vul hier je wachtwoord"/>
                        </label>
                        {error && <p className={styles["error"]}>Dit zijn geen juiste inloggegevens</p>}
                        <button className={styles["button-form"]} type="submit">Inloggen</button>
                    </form>
                </article>
            </div>
        </>
    )
}

export default Login;