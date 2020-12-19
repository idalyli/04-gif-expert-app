import React from 'react'
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")
const { GifExpertApp } = require("../../GifExpertApp")

describe('Pruebas GifGridItem', () => {
   


    test('Debe mostrar <GifGridItemp correctamente /> ', () => {
        //const [categories, setCategories] = useState(['One Punch'])
        const title="Un titulo";
        const url="https://localhost/algo.com"
        const wrapper= shallow(<GifGridItem url={url} title={title} />)
        expect(wrapper).toMatchSnapshot();
    })


    
})