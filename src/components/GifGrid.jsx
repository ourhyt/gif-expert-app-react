import {GifGridItem} from "./GifGridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
    console.log(isLoading);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    images.map(images => (
                            <GifGridItem key={ images.id} {...images}/>
                        ))
                }
            </div>
        </>
    )
}

