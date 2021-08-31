import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetailContainer'


const CardContent = ({ data }) => (
    <Card className="estilosCards" style={{ height: 500, margin: 20 }}>
        <Image src={data.avatar_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>{data.login}</Card.Header>
            <Card.Meta><span className="date">{data.id}</span></Card.Meta>
            <Card.Description>{data.description}</Card.Description>
        </Card.Content>
        <ItemCount />
    </Card>
)

export default CardContent;