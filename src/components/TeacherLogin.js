import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TeacherLogin = () => {
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/teachers', { teacherId, password });
      console.log(response.data);
      // Redirect to teacher dashboard after successful login
      navigate('/teacher-dashboard');
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Invalid teacher ID or password');
    }
  };

  return (
    <div>
      <h1>Teacher Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Teacher ID:</label>
          <input
            type="text"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default TeacherLogin;
