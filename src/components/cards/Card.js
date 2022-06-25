import React from 'react'
import "./Card.css";

const Card = ({ title, img, desc }) => {
    return (
        <div className='flex_container'>
            <div className='cards'>
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <img src={img} alt={title} />
                <div className="card-over">
                    <p>{desc}</p>
                </div>

            </div>
        </div>
    )
}

export default Card