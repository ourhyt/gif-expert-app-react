import {GifGridItem} from "./GifGridItem.jsx";
import {useFetchGifs} from "../hooks/useFetchGifs.js";
import PropTypes from "prop-types";

export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);

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

GifGrid.prototype = {
    category: PropTypes.string.isRequired
}

