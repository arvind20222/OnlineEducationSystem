import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const TeacherRegistration = () => {
  const [teacherId, setTeacherId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/teachers', {
        teacherId,
        password
      });
      console.log(response.data);
      alert('Teacher registered successfully.');
      navigate('/teacher-login');
    } catch (error) {
      console.error('Error registering teacher:', error);
      setError('Failed to register teacher.');
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Teacher Registration</h1>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default TeacherRegistration;
