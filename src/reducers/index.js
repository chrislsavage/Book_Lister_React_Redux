import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
const rootReducer = combineReducers({ //this is the mapping of the state
    books: BooksReducer
});

export default rootReducer;
