const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library')

const authorSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
});

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true}
});

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    status: {type: String, required: true}
});


const Author = mongoose.model("Author", authorSchema);
const User = mongoose.model("Users", userSchema);
const Book = mongoose.model("Books", bookSchema);

module.exports = {
    Author,
    User,
    Book
};
