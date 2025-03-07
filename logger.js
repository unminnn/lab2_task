const library = require('./library');
const express = require("express");
const borrowBook = express.Router();
const returnBook = express.Router();

const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
}

 borrowBook.post("/books/borrow/:id", async(req, res) => {
    const book = await library.Book.findById({_id: req.params.id});

    if (book) {
        if (book.status === "available") {
            await library.Book.updateOne({_id: req.params.id}, {status: "checked out"})
            console.log(`[${new Date().toISOString()}] Book "${book.title}" borrowed`);
            res.status(200).send("Book borrowed");
        } else {
            console.log(`[${new Date().toISOString()}]Requested book not available`);
            res.status(400).send("Requested book not available");
        }
    } else {
        res.status(404).send("Book not found");
    }
})

returnBook.post("/books/return/:id", async(req, res) => {
    const book = await library.Book.findById({_id: req.params.id});

    if (book) {
        if (book.status === "checked out") {
            await library.Book.updateOne({_id: req.params.id}, {status: "available"})
            console.log(`[${new Date().toISOString()}] Book "${book.title}" returned`);
            res.status(200).send("Book returned");
        } else {
            console.log(`[${new Date().toISOString()}] Book "${book.title}" already in the library`);
            res.status(400).send("Book already in the library");
        }
    } else {
        res.status(404).send("Book not found");
    }
})

const authentiactor = (req, res, next) => {
    const header = req.headers['authorization'];
    
    if (header === "Bearer ZEWAIL") {
        return next();
        console.log("successfully authenticated");
    } 
    else {
        return res.status(403).send("forbidden access");
    }
}

module.exports = {
    logger,
    authentiactor,
    returnBook,
    borrowBook
}
