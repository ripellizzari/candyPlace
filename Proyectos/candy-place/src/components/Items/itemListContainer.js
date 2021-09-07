import { React, useState, useEffect } from "react";
import ItemList from "../Items/ItemList";
import ItemDetail from '../body/ItemDetail/ItemDetailContainer'
import ItemDetailContainer from "../body/ItemDetail/ItemDetail";



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com//products?limit=5')
                .then((response) => {
                    console.log(response);

                    return response.json();

                })
                .then((data) => {
                    setProducts(data);
                });
        }, 2000)

    }, []);

    return <>
        <div>
            <ItemList products={products} />




        </div>

    </>

};

export default ItemListContainer;