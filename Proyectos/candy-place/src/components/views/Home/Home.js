import React, { useState } from 'react'
import ItemListContainer from '../../Items/itemListContainer'
import { Button, Input } from 'semantic-ui-react'
import axios from 'axios'
import CardItem from '../../body/CardItem/CardItem'
import './Home.css'

const Home = () => {
    const [value, setValue] = useState('');
    const [itemData, setItemData] = useState({});

    // evento = e
    const onChangeValue = (e) => {

        setValue(e.target.value);

    };

    const onSubmit = (e) => {
        e.preventDefault();

        const productInput = value.toLowerCase().replace(/ /g, '');
        console.log(productInput);

        if (productInput) {
            axios(`https://api.github.com/users/${productInput}`).then((res) =>
                setItemData(res.data));
            setValue('');
        }


    }

    return (
        <div className="homeContainer">
            <h1 className="titulo">El lugar de los dulces</h1>
            <form
                className="formulario"
                onSubmit={onSubmit}>
                <Input
                    placeholder='Quien eres...'
                    onChange={onChangeValue}
                    style={{ fontSize: 15 }}
                    value={value} />
                <Button primary style={{ fontSize: 15 }}>
                    Buscar
                </Button>
            </form>
            <div className="user">
                {itemData.id && <CardItem itemData={itemData} />}
            </div>

            <ItemListContainer />
        </div>
    )
}

export default Home;
