import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom';

const SignInSelection = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <h1>Sign In</h1>
      <div>
        <h2>Select User Type:</h2>
        <div>
          <Link to="/student-login">Student Sign In</Link>
        </div>
        <div>
          <Link to="/teacher-login">Teacher Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInSelection;
