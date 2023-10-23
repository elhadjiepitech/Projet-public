import React, { useState } from "react";
import "./searchbar.css";

function SearchBar({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch(searchTerm);
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input className="search-input" type="text" placeholder="Rechercher un emploi" value={searchTerm} onChange={handleChange} />
            <button className="search-button" type="submit">Rechercher</button>
        </form>
    );
}

export default SearchBar;