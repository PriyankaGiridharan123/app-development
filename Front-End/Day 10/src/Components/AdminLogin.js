import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../actions/userActions';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };
  const nav = useNavigate(); 
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();
    if (!trimmedUsername || !trimmedPassword) {
      alert('Please enter both username and password.');
      return;
    }
    dispatch(setUser(trimmedUsername));

  nav('/dashboard');
  };

  return (
    <div id="login-page">
      <div className="login">
        <h2 className="login-title"> Admin Login</h2>
        <p className="notice">Check events!</p>
        <form className="form-login" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label> 
        <div className="input-username">
          <i className="fas fa-envelope icon"></i>
          <input
            type="text" 
            name="username" 
            placeholder="Enter your username" 
            required
            value={username}
            onChange={handleUsernameChange} 
          />
        </div>
        <label htmlFor="password">Password</label>
          <div className="input-password">
            <i className="fas fa-lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="checkbox">
            <label htmlFor="remember">
              <input
                type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember me
            </label>
          </div>
          <button type="submit">
            <i className="fas fa-door-open"></i> Sign in
          </button>
        </form>
        <br></br>
      </div>
      <div className="background">
      <h1>Welcome back</h1><h1>"ADMIN"</h1>

      <h2>We're thrilled to have you back! Whether you're planning a memorable gathering or attending a spectacular event, we're here to make it effortless and enjoyable.
      
      Log in to access your event dashboard, track your upcoming events, or create new ones. Let's bring your vision to life, one event at a time.
      
      Stay organized, stay connected, and make every event unforgettable with Unplugged Events.</h2>

      </div>
    </div>
  );
}

export default AdminLogin;