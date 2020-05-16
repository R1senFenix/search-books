const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    id: mongoose.Types.ObjectId(),
    subtitle: String,
    img: String,
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
