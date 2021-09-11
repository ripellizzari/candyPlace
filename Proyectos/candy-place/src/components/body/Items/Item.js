import React from "react";
import { Card, Image } from "semantic-ui-react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

//import ItemDetail from '../Items/ItemDetailContainer/ItemDetail'

const Item = ({ product }) => (
    <Card className="card">
        <Image src={product.image} className="image" />
        <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <Card.Description>${product.price}</Card.Description>
        </Card.Content>

    </Card>
);

export default Item;

