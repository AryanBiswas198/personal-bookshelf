// BookSearch.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { FiSearch } from "react-icons/fi";

const BookSearch = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (query) {
        const response = await axios.get(
          `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
        );
        setBooks(response.data.docs);
      } else {
        setBooks([]);
      }
    };

    fetchData();
  }, [query]);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center top-0 left-0 w-full p-4 z-10">
      <div className="flex items-center border border-gray-300 rounded relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for books..."
          className="w-full py-2 pl-12 pr-4 bg-gray-950 text-white rounded-full outline-none"
        />
      </div>
      <div className="flex flex-wrap justify-center items-start mt-10">
        {books.map((book) => (
          <div key={book.key} className="w-64 h-60 mx-5 my-2">
            <BookCard book={book} addToBookshelf={addToBookshelf} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;
