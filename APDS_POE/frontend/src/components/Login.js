import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { toast } from 'react-toastify'; // Import toast
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Input validation for empty fields
    if (!username.trim() || !password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Syntax restriction
    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      toast.error('Username can only contain letters and numbers');
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
      toast.error('password can only contain letters and numbers');
      return;
    }


    const credentials = {
      username: username,
      password: password,
    };

    loginUser(credentials)
      .then((response) => {
        // Handle success
        console.log('User logged in successfully', response.data);
        toast.success('Welcome, ' + username + ' Logged in successfully');
        navigate('/dashboard');
      })
      .catch((error) => {
        // Handle errors
        console.error('Error logging in', error);
        toast.error('Error logging in');
      });
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError(e.target.value.trim() ? '' : 'Username is required');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.trim() ? '' : 'Password is required');
  };

  return (
    <div>
      <h2>User Login </h2>
      <div style={{ marginBottom: '8px' }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        {usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
      </div>
      <div style={{ marginBottom: '8px' }}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <label style={{ marginLeft: '5px' }}>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
          />
          Show Password
        </label>
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>
      <div style={{ marginTop: '8px' }}>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
