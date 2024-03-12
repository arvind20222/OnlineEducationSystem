import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#add8e6' }}>
      <div className="container">
        <Link className="navbar-brand text-dark" to="/">Examination Evaluation System</Link> {/* Update text color to black */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">Home</Link> {/* Update text color to black */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signin">Sign In</Link> {/* Update text color to black */}
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/signup">Sign Up</Link> {/* Update text color to black */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
