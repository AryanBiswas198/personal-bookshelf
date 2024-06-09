// BookSearchPage.jsx
import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const BookSearchPage = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem('bookshelf')) || []
  );

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className='bg-black'>
      <Header />
      <div className="min-h-screen flex flex-col mt-20 mx-auto items-center bg-black z-100">
      <h1 className="text-4xl font-bold mt-8 mb-2 tracking-wide text-white">Search For a <span className='text-violet-400'>Book</span></h1>
      <BookSearch addToBookshelf={addToBookshelf} />
      <Link to="/bookshelf" className="text-violet-400 hover:underline hover:text-violet-600 mb-10">
        Go to My Bookshelf
      </Link>

      <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)",
          }}
        ></div>
    </div>
    </div>
  );
};

export default BookSearchPage;
