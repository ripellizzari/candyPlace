import React from 'react';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
    return (
        <div className="container">
            <div>
                <h1>Candy place</h1>
                <div className="navBar">
                    <img className="logoCandyPlace" src="https://i.ibb.co/d21np8d/cand-place-logo-final-psd.png" alt="cand-place-logo-final-psd" border="0"></img>


                    <ul className="menu" tyle={{ color: "blue", backgroundColor: "yellow", display: "flex-end", }}>
                        <li style={{ padding: 20 }}><a href="#productos">Productos</a></li>
                        <li style={{ padding: 20 }}><a href="#contactanos">Contactanos</a></li>
                        <li style={{ padding: 20 }}><a href="#nosotros">Nosotros</a></li >
                        <li style={{ padding: 20 }}><a href="#carrito"><CartWidget /></a></li >
                    </ul >
                </div>
            </div >

        </div>
    )
}


export default NavBar;



