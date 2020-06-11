import { createStore } from 'redux';
import rootReducer from './reducer';

const initialState = {
    books: [
        {title: 'Black Feminist Thought', author: 'Patricia Collins'},
        {title: 'The Black Woman, An Anthology', author: 'Toni Cade Bambara'},
        {title: 'Words of Fire', author: 'essays by different Black women'},
        {title: 'Playing in the Dark', author: 'Toni Morrison'},
        {title: 'In Search Of Our Mother’s Gardens: Womanist Prose', author: 'Alice Walker'},
        {title: 'Sisters Of The Yam', author: 'Yaba Blay'}
    ],
    searchBook: ''
};

let store = createStore(rootReducer, initialState);

export default store