import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import './BrowseBooks.css';

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState('');
  const books = useSelector((state) => state.books.books);
  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category === category) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) || book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="browse-books-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search by title or author"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <h2 className="category-title">Books in {category || 'All Categories'}</h2>
      <ul className="books-list">
        {filteredBooks.map((book) => (
          <li key={book.id} className="book-item">
            <Link to={`/book/${book.id}`} className="book-link">
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BrowseBooks;
