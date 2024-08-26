import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Krishidwar</h1>
      <p className="home-text">
        Connecting Farmers and Buyers through Assured Contract Farming for Stable Market Access.
        
      </p>
      <Link to="/register">Get Started</Link>
      
    </div>
  );
}

export default Home;
