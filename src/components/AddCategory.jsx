import {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setInputvalue]=useState('');
    const onInputChange = ({target}) => {
        setInputvalue(target.value);
    }

    const onSubmit = ( event) => {
        event.preventDefault();
        const value = inputValue.trim();
        if (value.length <= 1) return;
        //setCategories([...categories,inputValue])
        onNewCategory(value);
        setInputvalue('')
    }

    return (
            <form onSubmit={onSubmit} aria-label="form">
                <input
                    type="text"
                    placeholder="Search Gif"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}

