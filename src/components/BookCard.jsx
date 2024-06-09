import React from "react";

const BookCard = ({ book, addToBookshelf }) => (
  <div className="border-[.1px] shadow-md rounded-2xl p-4 m-2 w-58">
    <h3 className="text-xl text-white font-bold">{book.title}</h3>
    <p className="text-gray-400">
      {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
    </p>
    <button className="mt-4 relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        Add to BookShelf
      </span>
    </button>
  </div>
);

export default BookCard;
