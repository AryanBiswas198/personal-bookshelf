import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mt-4">My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
      <Link to="/" className="text-blue-500 hover:underline mt-4 block">
        Back to Book Search
      </Link>
    </div>
  );
};

export default BookshelfPage;
