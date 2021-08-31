import React, { Component } from 'react';
import './style.css';

import './components/CartWidget'
import './components/Items/Item'
import './components/Items/itemListContainer'

import './components/NavBar';
import NavBar from './components/NavBar';
//import CardContent from './components/CardContent/CardContent';
import ItemListContainer from './components/Items/itemListContainer';
import ItemDetailContainer from './components/Items/ItemDetailContainer/itemDetailContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <div>
          <ItemListContainer />

        </div>


      </div>



    );
  }
}


export default App;
