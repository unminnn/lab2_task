const express = require("express");
const router = express.Router();
const library = require("./library");

router.put("/books/:id", async (req,res) =>{
    try {
        book = await library.Book.updateOne({_id: req.params.id}, req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).send("error occured: " + error.message);
    }
    
    
})

router.put("/authors/:id", async (req,res) =>{
    try {
        author = await library.Author.updateOne({_id: req.params.id}, req.body);
        res.status(201).json(author);
    } catch (error) {
        res.status(500).send("error occured: " + error.message);
    }
    
    
})

router.put("/authors/:id", async (req,res) =>{
    try {
        user = await library.User.updateOne({_id: req.params.id}, req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send("error occured: " + error.message);
    }
    
    
})

module.exports = router;