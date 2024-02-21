import {fireEvent, render, screen} from "@testing-library/react";
import {AddCategory} from "../../src/components/index.js";

describe('Test AddCategory', () => {

    it('Should change text box value', () => {
        render(<AddCategory onNewCategory={()=>{}}/>);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: { value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
    });

    it('should submit form', () => {
        const inputValue = 'Saitama';

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    it('shouldnt onNewCategory', () => {
        const inputValue = "";

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe("");
        expect(onNewCategory).toHaveBeenCalledTimes(0);
    });
});