import React from 'react'

export const GifGridItem = ({ title, url }) => {
    
    return (
        <div className="card">
            {/*  {img.title} */}
            <img src={url} alt={title} />
            <p>{title}</p>
            
        </div>
    )
}
