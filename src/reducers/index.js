import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'
const rootReducer = combineReducers({ //this is the mapping of the state
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;
