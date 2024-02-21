import {fireEvent, render, screen} from "@testing-library/react";
import {GifExpertApp} from "../src/GifExpertApp.jsx";

describe('Test GifExpert', () => {
    it('should ', () => {
        const {container}=render(<GifExpertApp/>);
        expect(container).toMatchSnapshot();
    });

    it('should as ', () => {
        render(<GifExpertApp/>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: { value: 'Saitama'}});
        fireEvent.submit(form);
        screen.debug();
        expect(screen.getByText('Saitama')).toBeTruthy();
    });
});