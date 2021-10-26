import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e =>{
        e.preventDefault();

        //firebase logics
    }

    const register = e => {
        e.preventDefault();
    
            
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo"
                src="https://logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text"
                    value={email}
                    onChange={e=> setEmail(e.target.value )}
                    />

                    <h5>Password</h5>
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" 
                    onClick={signIn} 
                    className="login__signInButton">Sign in</button>
                </form>
                   <p>By signing in ypu agree to Amazon Fake Clone condition of 
                       use, please see our prvacy notice, our cookies 
                       notice and our interest based Ads notice
                    </p>
                    <button
                    onClick={register}
                    className="login__registerButton">Create Account</button>
            </div>
        </div>
    )
}

export default Login
