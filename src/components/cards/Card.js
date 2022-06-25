import React from 'react'
import "./Card.css";

const Card = ({ title, img, desc }) => {
    return (
        <div className='flex_container'>
            <div className='cards'>
                <h2>{title}</h2>
                <img src={img} alt={title} />
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card