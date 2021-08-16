import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const CardComponent = ({ id, name, img, stock }) => (
    <Card>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
            <Card.id>{id}</Card.id>
            <Card.Header>{name}</Card.Header>
            <Card.Stock>{stock}</Card.Stock>
        </Card.Content>
    </Card>
);

export default CardComponent;