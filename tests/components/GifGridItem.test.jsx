import {render, screen} from "@testing-library/react";
import {GifGridItem} from "../../src/components/index.js";

describe('Test GifGridItem', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    // it('Should snapshot with render', () => {
    //     const {container} =render(<GifGridItem title={title} url={url}/>);
    //     expect(container).toMatchSnapshot();
    // });

    it('Should show image with url', () => {
        render(<GifGridItem title={title} url={url}/>);
        // expect(screen.getByRole('img').src).toBe(url)
        const { src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    it('Should show title', () => {
        render(<GifGridItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    });
});