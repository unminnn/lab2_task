const express = require("express");
const router = express.Router();
const library = require("./library");

router.delete("/book/:id", async (req,res) => {
    try {
        user = await library.Book.deleteOne({_id: req.params.id})
        res.status(200).send({ message: "book deleted successfully", id: req.params.id });
    } catch (error) {
        res.status(500).send("error occured: " + error.message);
    }
    
})

router.delete("/users/:id", async (req,res) => {
    try {
        user = await library.User.deleteOne({_id: req.params.id})
        res.status(200).send({ message: "user deleted successfully", id: req.params.id });
    } catch (error) {
        res.status(500).send("error occured: " + error.message);
    }
    
})

router.delete("/authors/:id", async (req,res) => {
    try {
        author = await library.Author.deleteOne({_id: req.params.id})
        res.status(200).send({ message: "author deleted successfully", id: req.params.id });
    } catch (error) {
        res.status(500).send("error occured: " + error.message);
    }
    
})

module.exports = router;