const { shallow } = require("enzyme")
import React from 'react';
const { CategoryAdd } = require("../../components/CategoryAdd")

describe('Pruebas en <CategoryAdd />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<CategoryAdd setCategories={setCategories} />)

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<CategoryAdd setCategories={setCategories} />)


    })


    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })


    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = "valor caja de texto"

        input.simulate('change', { target: { value: value } });
        expect(wrapper.find('p').text().trim()).toBe(value)
    })


    test('no debe se postear la informacion de onSubmit', () => {
        //wrapper.find('form').simulate('submit', { preventDefault: () => { } })
        wrapper.find('form').simulate('submit', {
            preventDefault() { }
        });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value='simulando ando';
        const input=wrapper.find("input")
        console.log(wrapper)
      
        input.simulate('change',{target:{value:value}});
       
        //1.simular el inputChange
        expect(wrapper.find('p').text().trim()).toBe(value);

        //simular el submit
        wrapper.find('form').simulate('submit',{preventDefault(){}});

        //3.setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

       //4.el valor del input debe estar ""
       expect(wrapper.find("input").prop("value")).toBe("");

    })




})
