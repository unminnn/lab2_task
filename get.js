const express = require("express");
const router = express.Router();
const books = require("./books");

router.get('/books', (req, res) => {
    res.json(books);
});

router.get("/books/:id", (req,res) =>{
    const book = books.find(i => i.id === parseInt(req.params.id));
    res.json(book); 
})

module.exports = router;