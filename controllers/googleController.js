const axios = require("axios");

// Create the TV constructor
const NewBooks = function () { };

NewBooks.prototype.findNewBook = function (req, res) {
    const enteredKey = "AIzaSyC5JILcuvaX9N-90CpPQL6NR-pgtag9W3Y";
    const URL = "https://www.googleapis.com/books/v1/volumes?q=" + req.booksText + "&key=" + enteredKey;

    axios.get(URL).then(response => {
        res.json(response)
        console.log(response);
    });
};