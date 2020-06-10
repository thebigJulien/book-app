import React from 'react';
import './App.scss';
import BooksList from './components/booksList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOK STORE</h1>
      </header>
      <BooksList></BooksList>
      <footer>@The Big Bookstore</footer>
    </div>
  );
}

export default App;
