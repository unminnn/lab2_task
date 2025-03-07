const express = require("express");
const router = express.Router();
const library = require("./library");

router.post("/books", async (req, res) => {
    try {
        const { title, status } = req.body;

        const newBook = new library.Book({
            title,
            status
        });
        
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(500).send("Error occurred: " + error.message);
    }
});

router.post("/authors", async (req, res) => {
    try {
        const { name, age } = req.body; 
        const newAuthor = new library.Author({
            name,
            age
        });
        
        const savedAuthor = await newAuthor.save();
        res.status(201).json(savedAuthor);
    } catch (error) {
        res.status(500).send("Error occurred: " + error.message);
    }
});

router.post("/users", async (req, res) => {
    try {
        const { name, age } = req.body; 
        const newUser = new library.User({
            name,
            age
        });
        
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).send("Error occurred: " + error.message);
    }
});

module.exports = router;
