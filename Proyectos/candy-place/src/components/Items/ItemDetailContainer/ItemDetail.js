import React from "react";
import Item from '../Item';


const ItemDetail = (description) => {
    return (
        <div className="Item">
            {description.products.map((detail) => {
                return <Item key={detail.id} detail={detail} />;
            })}
        </div>
    );
};

export default ItemDetail;