import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../Context/StateProvider';
import { auth } from '../../server/firebase';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{ user }, dispatch] = useStateValue();
  let history = useNavigate();

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history('/');
      })
      .catch((e) => console.log(e.message));
  };

  const register = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history('/');
      })
      .catch((e) => alert(e.message));
  };

  const handleUserName = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="login__logo"
          alt="Logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="email" value={email} onChange={handleUserName} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={handlePassword} />
          <Link to="/">
            <button className="login__signInButton" type="submit" onClick={login}>
              Sign in
            </button>
          </Link>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
