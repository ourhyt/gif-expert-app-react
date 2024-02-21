import {renderHook, waitFor} from "@testing-library/react";
import {useFetchGifs} from "../../src/hooks/useFetchGifs.js";

describe('Test hook ', () => {
    it('should initial state', () => {
        const {result} = renderHook( () => useFetchGifs('One Punch'))
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    it('should initial state', async () => {
        const {result} = renderHook( () => useFetchGifs('One Punch'))
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        const {images, isLoading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});