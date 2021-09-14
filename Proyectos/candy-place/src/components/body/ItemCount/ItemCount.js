import React from 'react'
import { Button } from "semantic-ui-react";
import './ItemCount.css'


const ItemCount = () => {
    let stock = 20;


    const [counter, setCounter] = React.useState(0);

    const añadir = () => {
        if (counter <= stock) {
            console.log('Añadido al carrito')
        } else {
            console.log('No hay stock suficiente')
        }


    }

    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    return (
        <div className="ItemCount">
            <h4 style={{ display: 'flex', justifyContent: 'center' }}>Cantidad:{counter}</h4>
            <div className="botonContador">
                <Button onClick={handleIncrement}>
                    +
                </Button>
                <Button onClick={handleDecrement}>
                    -
                </Button>

                <div className="botonComprar">
                    <button onClick={añadir} style={{ padding: 15 }} className="ui button">
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    );

}

export default ItemCount;
