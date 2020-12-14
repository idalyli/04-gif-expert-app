import React, { Fragment, useState } from 'react'


import { CategoryAdd } from './components/CategoryAdd'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Punch'])
/*     const handleAdd = () => {
        setCategorias(cats=>[...cats,"HunterXHunter"])

       // setCategorias([...categories,"HunterXHunter"])
       


    } */

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
        <CategoryAdd  setCategories={setCategories}   />

            

            <ol>
                {
                categories.map(category =>
                    <GifGrid 
                    key={category}
                    category={category} />)

                }
            </ol>

        </>
    )
}
