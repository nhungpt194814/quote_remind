import React, { useState } from 'react';
import './Login.css';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const nav = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async () => {
        console.log(1)
        try{
            const res = await axios.post(
                'http://localhost:3000/user/login',
                {
                    "email": email,
                    "password": password
                }
            );
            console.log(res.data);
            const userId = res.data.userId;
            nav("/user/"+userId);
        }
        catch(error){
            console.log(error);
        }
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
