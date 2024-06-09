import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookShelfPage';
import Home from './pages/Home';
import './index.css';

const App = () => (
  <Router>
  {/* <Header /> */}
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/booksearchpage" element={<BookSearchPage />} />
      <Route path="/bookshelf" element={<BookshelfPage />} />
    </Routes>
  </Router>
);

export default App;
