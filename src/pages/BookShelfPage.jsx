import React, { useState, useEffect } from 'react';
import Bookshelf from '../components/Bookshelf';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import "../App.css";

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  return (
    <div className='bg-black text-violet-400'>
      <Header />
      <div className="text-center min-h-[90vh] slide-in-left">
      <h1 className="text-4xl font-bold my-10 tracking-wide">My Bookshelf</h1>
      <Bookshelf books={bookshelf} />
      <Link to="/booksearchpage" className="text-violet-400 hover:underline mt-10 block">
        Back to Book Search
      </Link>
    </div>
    <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
    </div>
  );
};

export default BookshelfPage;
