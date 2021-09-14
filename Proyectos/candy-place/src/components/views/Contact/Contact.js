import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            <h1 className="titulo">Contacto</h1>
            <div class="ui inverted segment">
                <div class="ui inverted form">
                    <div class="two fields">
                        <div class="field">
                            <label>First Name</label>
                            <input placeholder="First Name" type="text"></input>
                        </div>
                        <div class="field">
                            <label>Last Name</label>
                            <input placeholder="Last Name" type="text"></input>
                        </div>
                    </div>
                    <div class="inline field">
                        <div class="ui checkbox">
                            <input type="checkbox" tabindex="0" class="hidden"></input>
                            <label>QUIERO RECIBIR INFORMACIÓN SOBRE NUESTROS PRODUCTOS</label>
                        </div>
                    </div>
                    <div class="ui submit button">Submit</div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
