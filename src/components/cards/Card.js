import React from 'react'
import "./Card.css";

const Card = (props) => {
    const { id, title, image, desc } = props;
    return (
        <div className='cards'>
            <div className="title">
                <h1>{title}</h1>
            </div>
            <img src={image} alt={title} />
            <div className="card-over">
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card