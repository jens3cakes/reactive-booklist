import React, { Component } from 'react';//where the states lives
/* import logo from './logo.svg';*/

import { connect } from 'react-redux';
import './App.css';
import BookListAppTitle from '../BookListAppTitle';
import BookList from '../BookList';
import AddBook from '../AddBook';
import { loadBooks } from '../../actions/bookActions';

class App extends Component {
  constructor(props) {
    super(props)
    this.addBook = this.addBook.bind(this);
  }
  addBook({ title, author }) {
    const { books } = this.state;
    const _id = this.state.currentId;
    const newBook = { _id, title, author };
    this.setState({
      currentId: _id + 1,
      books: [...books, newBook]
    })//[...]=spread array

  }

  render() {
    return (
      <div className="App">
        <BookListAppTitle title="books" />
        <BookList books={this.props.books} />
        <AddBook addBook={this.addBook} />
      </div>
    );
  }
  componentDidMount() {
    console.log('cdm firing');
    const mockBooks= [

        {
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
      ]
    
    this.props.loadBooks(mockBooks)

  }//lifecycle method
  
}

const mapStateToProps = (state) => {
  return {
    books: state
  }
}
//this.state.books

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: (books) => {
      dispatch(loadBooks(books));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);//higher order component 
