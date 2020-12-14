import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])


    useEffect(() => {
        getGifs();

    }, [])
    // el segundo argumento de use efect [] quiere decir que se carga solo la primera vez, que el componente se reenderiza
    const getGifs = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=sZQ3ox6LpfcHxyAlmfSdpqUdgKQEnjRQ`
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url

            }


        })

        setImages(gifs)

        /*         const items=gifs.map(item=>{
                return <li key={item.id}>{item.title}</li>
                })
                setImages(items) */

    }
    //getGifs()



    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                <ol>
                    {/* {images} */}

                    {

                        images.map(img => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }

                </ol>

            </div>
        </>
    )
}
