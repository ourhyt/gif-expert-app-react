import {render, screen} from "@testing-library/react";
import {GifGrid} from "../../src/components/index.js";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

jest.mock('../../src/hooks/useFetchGifs.js');

describe('Test GifGrid', () => {

    const category = 'One Punch'

    it('should show loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...')).toBeTruthy();
    });

    it('should show items when images are uploaded', () => {

        const gifs = [
            {
                id: 1,
                title: 'One Punch',
                url: 'https://media.giphy.com/media/3o7890x0100000000/giphy.gif'
            },
            {
                id: 2,
                title: 'One Punch',
                url: 'https://media.giphy.com/media/3o7890x0100000000/giphy.gif'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });

        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2)
    });
});