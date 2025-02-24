const express = require("express");
const router = express.Router();
const books = require("./books")


router.post("/books", (req,res) => {
    const title = req.body;
    const newBook = {
        id: books.length + 1,
        title
    }
    books.push(newBook);
    res.status(201).json(newBook);
});

module.exports = router;

