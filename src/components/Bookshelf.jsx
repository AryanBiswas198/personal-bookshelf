import React from 'react';

const Bookshelf = ({ books }) => (
  <div className="flex flex-wrap justify-center">
    {books.length === 0 ? (
      <p className="text-gray-500 mt-4">No books in your bookshelf.</p>
    ) : (
      books.map((book, index) => (
        <div key={index} className="bg-white shadow-md rounded-md p-4 m-2 w-64">
          <h3 className="text-xl font-bold">{book.title}</h3>
          <p className="text-gray-700">{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
        </div>
      ))
    )}
  </div>
);

export default Bookshelf;
