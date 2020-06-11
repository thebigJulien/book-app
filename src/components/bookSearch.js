import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterBook } from '../store/actions';

class BookSearch extends Component {
    
    
    render() { 
        return ( <div className="search-author">
            <h4>Search your favourite author in our list</h4>
            <input  type="text"
                    placeholder="your favourite author..."
                    onChange={(e) => this.props.filterBook(e.target.value)}/>
        </div>  );
    }
}
 
export default connect(null, { filterBook }) (BookSearch);