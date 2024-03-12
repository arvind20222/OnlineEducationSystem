import React from 'react';
import Navbar from './Navbar';
import backgroundImage from '../images/background.jpg'; // Import your background image
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top', // Set background position to top
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <h1>

        </h1>
        <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
}

export default HomePage;
