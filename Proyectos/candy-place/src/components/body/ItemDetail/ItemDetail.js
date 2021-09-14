import './ItemDetail.css'
import { Fragment } from 'react/cjs/react.production.min';

const ItemDetail = ({ producto }) => {


    return (


        <Fragment>

            <div className="ItemDetailContainer">

                <h1 className="titulo">{producto.title}</h1>

                <h4 className="descripcion">{producto.description}</h4>

                <img className="imgDetalle" src={producto.image}></img>

            </div>

        </Fragment>
    )
}

export default ItemDetail;
