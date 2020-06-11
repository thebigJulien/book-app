import React, { Component } from 'react';
import { connect } from 'react-redux';

class BooksList extends Component {

    render() { 

        let searchBook = this.props.searchBook;

        if(searchBook) {
            searchBook = searchBook.toLowerCase();
            searchBook= searchBook.filter(book => book.author.toLowerCase().includes(searchBook))
        }

        let books = this.props.books;
        let jsxBooksList = books.map(book => (
            <div key={book.author} className="book">
                <h2>{book.title}</h2>
                <p>{book.author} </p>
            </div>

        ))
        return ( <div className="booksList"> 
        {jsxBooksList} 
        </div> );
    }
}
 
let mapStateToProps = (state) => ({
    books: state.books,
    searchBook: state.searchBook
})
export default connect(mapStateToProps) (BooksList);