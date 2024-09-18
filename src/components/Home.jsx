import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to the Online Library</h1>
      <p className="home-intro">Explore a world of knowledge through our vast collection of books.</p>

      <h2 className="section-title">Categories</h2>
      <ul className="category-list">
        <li><Link to="/books/Fiction" className="category-link">Fiction</Link></li>
        <li><Link to="/books/Non-Fiction" className="category-link">Non-Fiction</Link></li>
        <li><Link to="/books/Sci-Fi" className="category-link">Sci-Fi</Link></li>
      </ul>

      <h2 className="section-title">Popular Books</h2>
      <ul className="popular-books">
        <li><Link to="/book/1" className="popular-book-link">The Hobbit</Link></li>
        <li><Link to="/book/2" className="popular-book-link">Sapiens</Link></li>
      </ul>
    </div>
  );
}

export default Home;
