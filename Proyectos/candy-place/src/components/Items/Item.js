import React from "react";
import { Card, Image } from "semantic-ui-react";


const Item = ({ product }) => (
    <Card className="card">
        <Image src={product.image} className="image" />
        <Card.Content>
            <Card.Header>{product.title}</Card.Header>
            <Card.Meta>
                <span className="category">{product.category}</span>
            </Card.Meta>
            <Card.Description>${product.price}</Card.Description>
            <Card.Content extra>
                <button>Mas Detalles</button>
            </Card.Content>
        </Card.Content>
    </Card>
);

export default Item;

// const items = [
//     {
//         id: '1',
//         name: 'Dientes de Dracula',
//         img: 'https://http2.mlstatic.com/D_NQ_NP_853655-MLA40543347879_012020-O.jpg',
//         stock: '500'
//     },

//     {
//         id: '2',
//         name: 'Malvavisco',
//         img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/135/794/products/15-24e303fd9e871ba52115956928313486-640-0.jpg',
//         stock: '450'
//     },

//     {
//         id: '3',
//         name: 'Gomitas',
//         img: 'https://http2.mlstatic.com/D_NQ_NP_785293-MLA41431782365_042020-O.jpg',
//         stock: '750'
//     },

//     {
//         id: '4',
//         name: 'Anillitos de gomitas',
//         img: 'https://riobgdistribuciones.com/wp-content/uploads/2020/04/mogul-anillos-unidades.jpg',
//         stock: '600'
//     }

// ]