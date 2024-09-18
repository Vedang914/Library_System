import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';  // Ensure you have a separate CSS file for Navbar styles

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse-books">Browse Books</Link></li>
        <li><Link to="/add-book">Add Book</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
