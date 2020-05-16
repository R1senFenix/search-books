import React from "react";

function SearchBar() {
    return (
        <div className="border">
            <form>
                <p>Book Search</p>
                <br />
                <input type="text" id="book-search" placeholder="Enter the name of a book to search" />
                <input type="Submit" value="Submit" />
            </form>
        </div>
    )
}

export default SearchBar;