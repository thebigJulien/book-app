import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const initialState = {
    books: [],
    searchBook: ''
};

let store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store