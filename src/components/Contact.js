// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css'

const Contact = (props) => {
    return (
        <div className="card">
            <div>
                <img src={props.data.photo} alt={props.data.name} />
                <div className="container">
                    <h1>{props.data.name}</h1>
                    <h2>{props.data.phone}</h2>
                    <h2>{props.data.email}</h2>
                </div>
            </div>
        </div>
    )
}

export default Contact;