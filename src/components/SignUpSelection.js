import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import { Link } from 'react-router-dom';

const SignupSelection = () => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar component */}
      <h1>Sign Up</h1>
      <div>
        <h2>Select User Type:</h2>
        <div>
          <Link to="/student-registration">Student Sign Up</Link>
        </div>
        <div>
          <Link to="/teacher-registration">Teacher Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupSelection;
