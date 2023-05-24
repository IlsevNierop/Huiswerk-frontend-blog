import React from 'react';

function Login({isAuth, setAuthenticated}){
    console.log(isAuth);

    return (
        <>
        <h1>Login pagina</h1>
            <p>Druk op de knop om je in te loggen, alleen dan kun je de blogs zien</p>

            <button type="button" onClick={() => setAuthenticated(prev => !prev)}>Inloggen</button>
        </>
    )
}

export default Login;