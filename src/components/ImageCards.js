import React from 'react'
import ImageRender from './ImageRender'
import '../style/ImageCards.css'

function ImageCards(props) {

    return (
        <>
            {props.images.length != 0 ? <h1>Results:</h1> : ''}
            <div className='image-container'>
                {props.images.map(image => {
                    return <ImageRender key={image.id} image={image} />
                })}
            </div>
        </>
    )
}

export default ImageCards;