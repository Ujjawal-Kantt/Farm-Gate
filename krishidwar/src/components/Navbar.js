import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <a className="navbar-brand" href="#">Krishidwar</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/farmer-dashboard">Farmer Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/buyer-dashboard">Buyer Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/support">Support</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
