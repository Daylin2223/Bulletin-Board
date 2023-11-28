import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
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


    const userData = {
      username: username,
      password: password,
    };

    registerUser(userData)
      .then((response) => {
        // Handle success
        console.log('User registered successfully', response.data);
        toast.success('User registered successfully');
        navigate('/login');
      })
      .catch((error) => {
        // Handle errors
        console.error('Error registering user', error);
        toast.error('Error registering user');
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
      <h2>User Registration </h2>
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
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
