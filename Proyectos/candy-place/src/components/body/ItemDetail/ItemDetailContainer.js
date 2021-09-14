import { React, useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'



const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const { id } = useParams();


    useEffect(() => {
        setTimeout(() => {
            fetch("https://fakestoreapi.com//products?limit=5")
                .then((response) => {
                    console.log(response);

                    return response.json();
                })
                .then((data) => {
                    data.forEach((item) => {
                        if (item.id === 1) {
                            setProducto(item);
                        }
                    })
                });
        }, 0);
    }, []);






    return <ItemDetail producto={producto} />

}

export default ItemDetailContainer
