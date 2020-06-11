import React from 'react';
import './App.scss';
import BooksList from './components/booksList';
import AddBook from './components/inputBook';
import BookSearch from './components/bookSearch';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOK STORE</h1>
      </header>
      <BookSearch></BookSearch>
      <BooksList></BooksList>
      <AddBook></AddBook>
      <footer>&#169; The Big Bookstore</footer>
    </div>
  );
}

export default App;
