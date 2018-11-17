import React from 'react'
import BookListItem from '../BookListItem/BookListItem'
const booksSrc = [{
  _id: 1,
  title: 'Talion: The Revenant from DB',
  author: 'Michael A. Stackpole'
},
{
  _id: 2,
  title: 'Ready Player One from DB',
  author: 'Ernest Cline'
},
{
  _id: 3,
  title: 'Enders Game from DB',
  author: 'Orson Scott Card'
}
];
const BookList = props => {
  const booksList = props.books.map(book => {
    const {_id, title, author} = book; 
    return (
    <BookListItem key = {_id} title = {title} author = {author} />
    );
  })
  return (
    <ul>
      {
        booksList 
      }

    </ul>

  )
}

export default BookList;