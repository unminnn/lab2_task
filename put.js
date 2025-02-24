const express = require("express");
const router = express.Router();
const books = require("./books");

router.put("/books/:id", (req,res) =>{
    const title = req.body;
    const book = books.find(i => i.id === parseInt(req.params.id));
    book.title = title;
    res.json(book); 
})

module.exports = router;