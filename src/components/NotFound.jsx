import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <h2 className="not-found-title">Page Not Found</h2>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
}

export default NotFound;
