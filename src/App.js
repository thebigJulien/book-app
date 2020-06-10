import React from 'react';
import './App.scss';
import BooksList from './components/booksList';
import AddBook from './components/inputBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BLACK FEMINIST BOOK STORE</h1>
      </header>
      <AddBook></AddBook>
      <BooksList></BooksList>
      <footer>&#169; The Big Bookstore</footer>
    </div>
  );
}

export default App;
