const express = require("express");
const router = express.Router();
const books = require("./books");

router.delete("/books/:id", (req,res) => {
    const book = books.findIndex(i => i.id === parseInt(req.params.id));
    const removedBook = books.splice(book,1);
    res.json(removedBook);
})

module.exports = router;