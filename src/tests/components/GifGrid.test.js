import React from 'react';
import { useFetchGifs } from '../../hooks/useFetchGifs';
const { shallow } = require("enzyme");
const { GifGrid } = require("../../components/GifGrid");


jest.mock('../../hooks/useFetchGifs');



describe('Pruebas en el componente<GifGrid /> ', () => {

    const category = "hello";

    test('Debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({

            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();

    });

   test('Debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const wrapper = shallow(<GifGrid category={category} />);

    })




})
