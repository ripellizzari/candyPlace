import { detail } from "./ItemDetail";
import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { Item } from "semantic-ui-react";




const ItemDetailContainer = () => {

    const { detail, setDetail } = useState({});


    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com//products?limit=5')

                .then((response) => {
                    console.log(response);

                    return response.json();
                })

                .then((data) => {
                    setDetail(data);
                });

        }, 2000)

    }, []);

    return <Item detail={detail} />;




};

export default ItemDetailContainer;