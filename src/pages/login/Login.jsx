import { useEffect, useState } from "react"
import "./Login.css"

export const Login = (props) => {

    useEffect( () => {
        props.bus('info del login')
    })

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        if (username && password) {
        setLoggedIn(true);
        alert('¡Inicio de sesión exitoso!');
        } else {
        alert('Por favor, ingresa tu nombre de usuario y contraseña.');
        }
    };

    return (
        <>
            <div className="login-container">
              <h2>Iniciar sesión</h2>
              <input
                type="text"
                placeholder="Nombre de usuario"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={handleLogin}>Iniciar sesión</button>
            </div>
        </>
    )
}