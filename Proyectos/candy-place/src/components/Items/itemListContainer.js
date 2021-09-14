import { React, useState, useEffect } from "react";
import ItemList from "../Items/ItemList";
import './ItemList.css'



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
        <div className="listaProductos">
            <div clasName="producto">
                <ItemList products={products} />
            </div>
        </div>

    </>

};

export default ItemListContainer;