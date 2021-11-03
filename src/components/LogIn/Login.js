import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import './Login.css'

const Login = () => {

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.form || "/shop"
    console.log("came from", location.state?.form)
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }


    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="submit" value="submit" />
                </form>
                <p>New to ema-jhon? <Link to="/register">Create Account</Link></p>
                <div>--------------or----------</div>
                <button className="btn-regular" onClick={handleGoogleLogin}>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;