const { getAllBooks, getBookById, insertBook, editBook, deleteBookById } = require('../services/books');

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        res.send(books);

    } catch (e) {
        res.status(500).send(e.message);
    }
}

function getBook(req, res) {
    try {
        const id = req.params.id;
        const book = getBookById(id);
        res.send(book);

    } catch (e) {
        res.status(500).send(e.message);
    }
}

function postBook(req, res){
    try {
        const newBook = req.body;
        insertBook(newBook);
        res.status(201).send('Book inserted');
    } catch (e) {
        res.status(500).send(e.message);
    }
} 

function patchBook(req, res){
    try {
        const editData = req.body;
        const id = req.params.id;
        editBook(editData, Number(id));
        res.status(200).send('Book updated');
    } catch (e) {
        res.status(500).send(e.message);
    }
}

function deleteBook(req, res){
    try {
        const id = req.params.id;
        deleteBookById(Number (id));
        res.status(200).send('Book deleted');
    } catch (e) {
        res.status(500).send(e.message);
    }
}


module.exports = {
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}