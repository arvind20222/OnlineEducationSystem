import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

const AdminLogin = () => {
  const [studentname, setStudentname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication

  // Check if the admin is already authenticated on component mount
  useEffect(() => {
    const adminSession = localStorage.getItem('adminSession');
    if (adminSession) {
      setAuthenticated(true);
      setStudentname(adminSession);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/admins');
      if (!response.ok) {
        throw new Error('Failed to fetch admin data');
      }
      const adminData = await response.json();
      console.log('adminData:', adminData); // Log adminData for debugging purposes

      // Check if adminData is an array and not empty
      if (Array.isArray(adminData) && adminData.length > 0) {
        // Find admin data by name
        const admin = adminData.find(admin => admin.name === studentname);

        if (admin) {
          if (admin.password === password) {
            console.log("Login successful");
            setAuthenticated(true); // Set authenticated state to true upon successful login
            localStorage.setItem('adminSession', studentname); // Store the username in local storage
          } else {
            setError('Invalid name or password');
          }
        } else {
          setError('Admin not found');
        }
      } else {
        setError('No admin data found');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred while logging in');
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('adminSession'); // Remove admin session data from local storage
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            {authenticated ? (
              <div>
                <h1 className="text-center mt-5">Welcome, {studentname}!</h1>
                <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
              
              </div>
            ) : (
              <div>
                <h1 className="text-center mt-5">Admin Login </h1>
                <form onSubmit={handleLogin} className="mt-3">
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      value={studentname}
                      onChange={(e) => setStudentname(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {error && <div className="text-danger mb-3">{error}</div>}
                  <button type="submit" className="btn btn-primary">Login</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
