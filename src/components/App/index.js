import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookListAppTitle from '../BookListAppTitle';

class App extends Component {
  render() {
    return (
        <div className="App">
        <BookListAppTitle title="books"/>
        </div>
    );
  }
}

export default App;
