import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="container">
            <div>
                <h1>Candy place</h1>
                <div className="navBar">
                    <img className="logoCandyPlace" src="https://i.ibb.co/d21np8d/cand-place-logo-final-psd.png" alt="cand-place-logo-final-psd" border="0"></img>


                    <ul className="menu" tyle={{ color: "blue", backgroundColor: "yellow", display: "flex-end", }}>


                        <li><Link to="/" style={{ padding: 20 }}>Home</Link></li>
                        <li><Link to="/about" style={{ padding: 20 }}>Nosotros</Link ></li>
                        <li><Link to="/contact" style={{ padding: 20 }}>Contactanos</Link></li>
                        <li><Link to="/products/:id" style={{ padding: 20 }}><CartWidget /></Link ></li>
                    </ul >
                </div>
            </div >

        </div>
    )
}


export default NavBar;



