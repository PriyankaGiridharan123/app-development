import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const authenticate = (e) => {
    e.preventDefault();

    if (username.length === 0) {
      alert('Enter Username');
    } else if (password.length === 0) {
      alert('Enter Password');
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div id="body">
      <div className="login-form">
        <div className="container">
          <div className="header">
            <h1>UNPLUGGED EVENTS</h1>
            <p>User Login</p>
          </div>

          {loggedIn ? (
            <p className='logged'><b>You are logged in Succesfully!</b></p>
          ) : (
            <form>
              <div className="input">
                <input
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
              <div className="input">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
              <input
                onClick={authenticate}
                className="login-button"
                type="submit"
                value="LOGIN"
              />
            </form>
          )}

          {!loggedIn && (
            <Link to="/usersignup">
              <p>No Account? Register Now!</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserLogin;