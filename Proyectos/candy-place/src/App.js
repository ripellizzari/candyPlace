import React, { Component } from 'react';
import './style.css';

// REACT ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//Components
import './components/CartWidget'
import './components/Items/Item'
import './components/Items/itemListContainer'
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Items/itemListContainer';

//Views
import About from '../src/components/views/About/About';
import Home from '../src/components/views/Home/Home';
import Contact from '../src/components/views/Contact/Contact';



const App = () => {

  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />

      </div>
      <div>
        <NavBar />
        <ItemListContainer />

      </div>





    </Router >
  );
}



export default App;
