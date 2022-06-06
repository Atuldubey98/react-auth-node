import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/userActions';
import './AuthenticationPage.css'
const AuthenticationPage = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const [password, setPassword] = useState('');
    const onLoginSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(email, password));
    }
    const onEmailChange = (e)=>{
        setEmail(e.target.value);
    }
    const onPasswordChange = (e)=>{
        setPassword(e.target.value);
    }
  return (
    <div className='auth__page'>
        <div className="auth__login">
            <form onSubmit={onLoginSubmit} className="auth__form">
                <input onChange={onEmailChange} name="email" value={email}/>
                <input onChange={onPasswordChange} type="password" name="password" value={password}/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default AuthenticationPage