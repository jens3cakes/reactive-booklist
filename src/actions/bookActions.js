export const LOAD_BOOKS = 'LOAD_BOOKS';
export const ADD_NEW_BOOK = 'ADD_NEW_BOOK';
export const loadBooks =(books) => {
  return {
    type: LOAD_BOOKS,
    books:books
  }
};
