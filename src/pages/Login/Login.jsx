import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
    };

    return (
        <div className='flexColCenter innerWidth login-container'>
            <h2>Login</h2>
            <div>
                <label>Email:</label>
                <input type='text' value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' value={password} onChange={handlePasswordChange} />
            </div>
            <button className='button' onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
