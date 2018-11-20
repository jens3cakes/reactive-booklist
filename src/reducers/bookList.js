import { LOAD_BOOKS, ADD_NEW_BOOK } from '../actions/bookActions';
import AddBook from '../components/AddBook';
const initialState = [];

const bookList = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      state = [...action.books];//... is the spread operator (return [...action.books])shorthand;
      return state;
    case ADD_NEW_BOOK:

    default:
      return state;
  }
}

export default bookList;