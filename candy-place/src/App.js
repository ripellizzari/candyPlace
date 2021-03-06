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
            id='2'
            name='Malvavisco'
            img='https://d3ugyf2ht6aenh.cloudfront.net/stores/135/794/products/15-24e303fd9e871ba52115956928313486-640-0.jpg'
            stock='450'
          />
          <CardComponent
            id='3'
            name='Gomitas'
            img='https://http2.mlstatic.com/D_NQ_NP_785293-MLA41431782365_042020-O.jpg'
            stock='750'
          />
          <CardComponent
            id='4'
            name='Anillitos de gomitas'
            img='https://riobgdistribuciones.com/wp-content/uploads/2020/04/mogul-anillos-unidades.jpg'
            stock='600'
          />
        </div>
      </div >
    );
  }
}




export default App;
