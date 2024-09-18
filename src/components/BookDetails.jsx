import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import './BookDetails.css';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((book) => book.id === parseInt(id)));

  if (!book) {
    return <h2 className="not-found">Book not found!</h2>;
  }

  return (
    <div className="book-details-container">
      <h1 className="book-title">{book.title}</h1>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-description">Description: {book.description}</p>
      <p className="book-rating">Rating: {book.rating}</p>
      <Link to="/browse-books" className="back-link">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;
