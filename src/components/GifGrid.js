import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs(category);


    /*     useEffect(() => {
           getGifs(category)
           .then(imgs=>setImages(imgs))
    
        },[category]) */
    // el segundo argumento de use efect [] quiere decir que se carga solo la primera vez, que el componente se reenderiza


    /*         const items=gifs.map(item=>{
            return <li key={item.id}>{item.title}</li>
            })
            setImages(items) */

    //getGifs()



    return (
        <>
            <h3>{category}</h3>
            {loading && <p>loading</p>}
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
