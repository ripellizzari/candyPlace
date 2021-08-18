import React from 'react'
import { Button } from "semantic-ui-react";



class ItemCount extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        };
    }



    handleCounterUp = () => {
        this.setState({ counter: this.state.counter + 1 });

    }

    handleCounterDown = () => {
        this.setState({ counter: this.state.counter - 1 });
    }




    render() {


        return (
            <div className="ItemCount">
                <h4 style={{ display: 'flex', justifyContent: 'center' }}>Cantidad:{this.state.counter}</h4>
                <div className="botonContador">
                    <Button primary onClick={this.handleCounterUp}>
                        +
                    </Button>
                    <Button secundary onClick={this.handleCounterDown}>
                        -
                    </Button>
                    <div className="botonComprar">
                        <button style={{ padding: 15 }} class="ui button">
                            Comprar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCount;
