import React, { Component } from 'react';
import './style.css';
import './components/CartWidget'



import './components/NavBar';
import NavBar from './components/NavBar';
import CardComponent from './components/CardComponent/CardComponent';



class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="card-container">
          <CardComponent
            id='1'
            name='Dientes de Dracula'
            img='https://http2.mlstatic.com/D_NQ_NP_853655-MLA40543347879_012020-O.jpg'
            stock='500'
          />
          <CardComponent
            id='1'
            name='Dientes de Dracula'
            img='https://http2.mlstatic.com/D_NQ_NP_853655-MLA40543347879_012020-O.jpg'
            stock='500'
          />
          <CardComponent
            id='1'
            name='Dientes de Dracula'
            img='https://http2.mlstatic.com/D_NQ_NP_853655-MLA40543347879_012020-O.jpg'
            stock='500'
          />
          <CardComponent
            id='1'
            name='Dientes de Dracula'
            img='https://http2.mlstatic.com/D_NQ_NP_853655-MLA40543347879_012020-O.jpg'
            stock='500'
          />
        </div>
      </div >
    );
  }
}




export default App;
