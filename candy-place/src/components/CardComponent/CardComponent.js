import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const CardComponent = ({ name, img, stock }) => (
    <Card className="estilosCards" style={{ height: 400, margin: 20 }}>
        <Image src={img} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta><span className="date">{stock}</span></Card.Meta>
        </Card.Content>
    </Card>
)

export default CardComponent