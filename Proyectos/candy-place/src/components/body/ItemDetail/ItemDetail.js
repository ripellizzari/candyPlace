import './ItemDetail.css'
import { Fragment } from 'react/cjs/react.production.min';
import ItemCount from '../ItemCount/ItemCount'
import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'

const ItemDetail = ({ producto }) => {


    const foo = () => {

    }


    return (


        <Fragment>
            <div className="ItemDetailContainer">
                <Card>
                    <Image src={producto.image} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{producto.title}</Card.Header>

                        <Card.Description>
                            {producto.description}
                        </Card.Description>
                        <ItemCount />

                        <Button foo={foo}>
                        </Button>
                    </Card.Content>


                </Card>
            </div>
            )






        </Fragment >
    )
}

export default ItemDetail;
