const express = require("express");
const router = express.Router();
const library = require("./library");

router.get('/books', async(req, res) => {
    const getbooks = await library.Book.find();
        res.json(getbooks);
});

router.get('/users', async (req, res) => {
    const getUsers = await library.User.find();
    res.json(getUsers);
});

router.get('/authors', async (req, res) => {
    const getAuthors = await library.Author.find();
    res.json(getAuthors);
});

router.get("/books/:id", async (req,res) =>{
    const getBook = await library.Book.findOne({title: req.params.title});
    res.json(getBook); 
})

router.get("/users/:id", async (req,res) =>{
    const getUser = await library.User.findOne({_id: req.params.id});
    res.json(getUser); 
})

router.get("/authors/:id", async (req,res) =>{
    const getAuthors = await library.Author.findOne({_id: req.params.id});
    res.json(getAuthors); 
})

module.exports = router;