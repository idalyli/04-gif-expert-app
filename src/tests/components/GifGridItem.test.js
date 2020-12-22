import React from 'react'
const { shallow } = require("enzyme")
const { GifGridItem } = require("../../components/GifGridItem")
const { GifExpertApp } = require("../../GifExpertApp")

describe('Pruebas GifGridItem', () => {

    const title = "One Pun";
    const url = "https://localhost/algo.com.co"
    const wrapper = shallow(<GifGridItem url={url} title={title} />)

    test('Debe mostrar <GifGridItemp correctamente /> ', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('debe de tener un parrafo con el titulo ', () => {
        const p = wrapper.find('p');
        //console.log(p.text().trim())
        expect(p.text().trim()).toBe(title)

    })
    test('debe de tener la imagen igual al url y alt de los props', () => {

        const img = wrapper.find('img')
        // console.log(img.prop('src'));
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);

    })

    test('debe  de tener animate__bounce', () => {

        const div = wrapper.find("div");

        expect(div.prop('className').includes('animate__bounce')).toBe(true)
    })






})