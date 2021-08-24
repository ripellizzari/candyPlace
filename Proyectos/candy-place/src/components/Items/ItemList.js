import React from "react";
import Item from "./Item";


const ItemList = (props) => {
    return (
        <div className="Item">
            {props.products.map((product) => {
                return <Item key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ItemList;