import React, { useState, useEffect } from "react";

function SearchBar(props) {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleSubmit(event) {
        event.preventDefault();
        props.handleFormSubmit(formObject);
    };

    return (
        <div className="border">
            <form onSubmit={handleSubmit}>
                <p>Book Search</p>
                <br />
                <input name="bookSearching" onChange={handleInputChange} type="text" id="book-search" placeholder="Enter the title of a book to search" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default SearchBar;