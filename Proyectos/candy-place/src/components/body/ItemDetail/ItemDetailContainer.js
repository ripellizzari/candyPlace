import { React, useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({
        name: 'remera',
        price: 500,
        id: 'remeraPage',
    })

    return <ItemDetail producto={producto} />


}

export default ItemDetailContainer
