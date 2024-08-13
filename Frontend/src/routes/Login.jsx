import {useState} from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (username === 'admin' && password === 'admin') {
            navigate('/Home');
        } else {
            alert('Login ou senha incorretos');
        }
    };

    return(
        <div className="body">
            <h1>Login</h1>
               <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
           <div className="formc">
            <img src="./Frontend/public/icon.png" alt="Logo" className="logo" />
                <div className="input-form">
                <br /> <br /><br />
                <img src="./Frontend/public/iconcadeado.png" alt="" className="cadeado" />
                <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                </div>
                <br />
                <button type="submit">Entrar</button>
                
            </form>
        </div>
        </div>
    )
}
export default Login;