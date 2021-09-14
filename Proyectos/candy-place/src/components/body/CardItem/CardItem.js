import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardItem = ({ itemData }) => (
    <Card>
        <Image src={itemData.avatar_url} wrapped ui={false} />
        <Card.Content>
            <Card.Header>Hola {itemData.login}!!</Card.Header>
            <Card.Meta>
                {itemData.bio}
            </Card.Meta>
            <Card.Description>
                {itemData.location}
            </Card.Description>
        </Card.Content>
    </Card>
)

export default CardItem;
