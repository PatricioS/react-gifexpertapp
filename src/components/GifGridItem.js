import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
    
    return (
        <div className="card animate__animated animate__fadeInLeft" onClick={ () => console.log(url)}>
            <img src={url} alt={title}/>
            <p> { title } </p>
        </div>
    )
}
