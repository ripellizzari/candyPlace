import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../../CartWidget';



const NavBar = () => {
    return (
        <div className="container">
            <div>
                <h1>Candy place</h1>
                <div className="navBar">
                    <img className="logoCandyPlace" src="https://i.ibb.co/d21np8d/cand-place-logo-final-psd.png" alt="cand-place-logo-final-psd" border="0"></img>


                    <ul className="menu" tyle={{ color: "blue", backgroundColor: "yellow", display: "flex-end", }}>

                        <Link to="/">Productos</Link>
                        <Link to="/contact">Contactanos</Link>
                        <Link to="/about" >Nosotros</Link>
                        <Link><CartWidget /></Link>
                    </ul >
                </div>
            </div >

        </div>
    )
}


export default NavBar;



