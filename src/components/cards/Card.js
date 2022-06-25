import React from 'react'

const Card = ({ id, title, img, desc }) => {
    // const { id, title, img, desc } = props
    console.log(img);
    return (
        <div className='gird_container'>
            <div className='cards'>
                <h2>{title}</h2>
                <img src={img} alt={title} />
                <p>{desc}</p>
            </div>
        </div>
    )
}

export default Card