import {getGifs} from "../../src/helpers/getGifs.js";

describe('Test getGifs', () => {
    it('should return an array', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});