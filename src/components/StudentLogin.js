import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const StudentLogin = () => {
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/students', {
        studentId,
        password
      });

      // Store student ID in sessionStorage
      sessionStorage.setItem('studentId', studentId);

      console.log(response.data);
      // Redirect to student homepage after successful login
      navigate('/student-homepage');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid student ID or password');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  const handleLogout = () => {
    // Remove student ID from sessionStorage
    sessionStorage.removeItem('studentId');
    // Redirect to login page after logout
    navigate('/student-login');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login-container">
          <h1>Student Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Student ID:</label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="error">{error}</div>}
            <button className="btn-login" type="submit">Login</button>
          </form>
          {/* Logout button */}
          {sessionStorage.getItem('studentId') && (
            <button className="btn-logout" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
