import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

const Verifycategory = (categories, newCategory) => {
    const categoriesUpper = categories.map(category => category.toUpperCase());
    return categoriesUpper.includes(newCategory.toUpperCase());
}
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'DragonBall'])
    const onAddCategory = (value) => {
        if (Verifycategory(categories,value)) return;
        setCategories([value,...categories]);
    }


    return (
        <>
            <h1>Gif Expert App</h1>

            {/*Input*/}
            <AddCategory
                //setCategories={ setCategories } categories={categories}
                onNewCategory = {onAddCategory}
            />

            <button onClick={onAddCategory}>Agregar</button>
            {
                categories.map((category) => (
                        <GifGrid category={category} key={category}/>
                    )
                )
            }

        </>
    )
};

