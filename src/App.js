import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Search from './Search';
import Post from './Post';
import Categories from './Categories';
import './App.css';

//random test comment

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container">
          <div className="row">
            <div className='col-md-8'>
              <Post />
            </div>
            <div className="col-md-4">
              <Search />
              <Categories />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
