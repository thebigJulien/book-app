import React, { Component } from 'react';
import './App.scss';
import BooksList from './components/booksList';
import AddBook from './components/inputBook';
import BookSearch from './components/bookSearch';
import { fetchBooks } from './store/actions';
import {connect} from 'react-redux'

class App extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }
  
  render() {
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
}

export default connect(null, {fetchBooks}) (App);
