import React, { useState, useEffect } from "react";
import API from "../../../utils/API";
import ResultsBooks from "./ResultsBooks";
import SearchBar from "../searchbar/SearchBar";

function SearchPanel() {

    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => {
                setBooks(res.data)
            }
            )
            .catch(err => console.log(err));
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(formObject) {
        if (formObject.bookSearching) {
            API.saveBook({
                title: formObject.bookSearching
            })
                .then(res => loadBooks())
                .catch(err => console.log(err));
        }
    };

    return (<div>
        <SearchBar handleFormSubmit={handleFormSubmit} />
        <ResultsBooks />
    </div>)
}


export default SearchPanel;