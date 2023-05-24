import React, {useState} from 'react';
import posts from "../../data/posts.json";
import users from '../../data/users.json';
import {useNavigate} from "react-router-dom";

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
            <h1>Login pagina</h1>
            <p>Log hier in om alle blogpost te kunnen lezen</p>
            <form onSubmit={authentication}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}
                       placeholder="Vul hier je gebruikersnaam in"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                       placeholder="Vul hier je wachtwoord in"/>
                {error && <p className="error">Dit zijn geen juiste inloggegevens</p>}
                <button type="submit">Inloggen</button>
            </form>
        </>
    )
}

export default Login;