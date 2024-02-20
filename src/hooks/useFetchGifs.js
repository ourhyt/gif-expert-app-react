import {getGifs} from "../helpers/getGifs.js";
import {useEffect, useState} from "react";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () =>{
        const gifs = await getGifs(category);
        setImages(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }
}