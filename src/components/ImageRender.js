import React, { useState } from 'react';

function ImageRender(props) {

    const [span, setSpan] = useState(0)

    const imageRef = React.createRef();

    const foo = () => {
        setSpan(Math.ceil(imageRef.current.clientHeight / 10) + 1)
    }

    return (
        <>
            <a style={{gridRowEnd: `span ${span}`}} href={props.image.urls.full} target='_blank' rel='noreferrer' >
                <img
                    alt={props.image.alt_description}
                    src={props.image.urls.small}
                    span={span} ref={imageRef}
                    onLoad={() => foo()}
                />
            </a>
        </>
    );
}

export default ImageRender;