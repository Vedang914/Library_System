import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author && category && description && rating) {
      dispatch(addBook({ id: Date.now(), title, author, category, description, rating: parseFloat(rating) }));
      navigate('/browse-books');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="add-book-container">
      <h1 className="form-title">Add a New Book</h1>
      <form className="book-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-input"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <input
          type="text"
          className="form-input"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <textarea
          className="form-textarea"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          className="form-input"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          min="0"
          max="5"
        />
        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
