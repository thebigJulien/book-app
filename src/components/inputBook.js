import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addNewBook} from '../store/actions';

class AddBook extends Component {
    state = {
        title: '',
        author: ''
    }

    render() { 
        console.log('props', this.props)
        return ( <div className="add-book">
            <h4>Add a book to our collection</h4>
            <input onChange={(e) => this.setState({title: e.target.value})} placeholder="title..." type="text" name="title"/>
            <input onChange={(e) => this.setState({author: e.target.value})} placeholder="author..." type="text" name="author"/>
            <button onClick={() => this.props.addNewBook(this.state.title, this.state.author)}>ADD</button>
        </div> );
    }
}
 
export default connect(null, {addNewBook})(AddBook);