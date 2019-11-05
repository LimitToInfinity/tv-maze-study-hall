import React from "react";

function SearchBar({ searchTerm, handleInput }) {
    
    const forgetAboutIt = () => {
        return null
    }

    return (
        <input
            onChange={forgetAboutIt}
            onInput={handleInput}
            className="search-bar"
            placehoder="search by name!"
            type="text"
            value={searchTerm}
        />
    );
}

export default SearchBar;