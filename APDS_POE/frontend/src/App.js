import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormStyles.css';
import Login from './components/Login';
import Register from './components/Register';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';

// New Dashboard component
const Dashboard = () => {
  const largeSquareButtonStyle = {
    width: '150px',
    height: '150px',
    fontSize: '16px',
  };

  return (
    <div className="center-container" style={{ marginTop: '50px' }}>
      <h1 className="underlined-heading">Dashboard</h1>
      <div className="form-container">
        <div className="buttons-container">
          <Link to="/createpost" className="custom-link2">
            <button style={largeSquareButtonStyle}>Create Post</button>
          </Link>
          <Link to="/deletepost" className="custom-link">
            <button style={largeSquareButtonStyle}>View Post</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
// ... (previous code)

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true);
  };

  const handleRegistrationSuccess = () => {
    setLoggedIn(true);
  };

  return (
    <Router>
      <div className="center-container">
        <h1 className="underlined-heading">🏛️ National Government Bulletin Board 🏛️</h1>
        <div className="form-container">
          {isLoggedIn ? (
            <>
              <Navigate to="/dashboard" />
              <Dashboard />
            </>
          ) : (
            <>
              {isLogin ? (
                <Login onSuccess={handleLoginSuccess} />
              ) : (
                <Register onSuccess={handleRegistrationSuccess} />
              )}
              {isLogin ? (
                <p>
                  Don't have an account?{' '}
                  <span onClick={handleSwitchForm} style={{ cursor: 'pointer', color: 'blue' }}>
                    Register
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <span onClick={handleSwitchForm} style={{ cursor: 'pointer', color: 'blue' }}>
                    Login
                  </span>
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/deletepost" element={<DeletePost />} />
        <Route path="App" element={<Navigate to="/dashboard" />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App;