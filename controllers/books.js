const { getAllBooks, getBookById } = require('../services/books');

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

module.exports = {
    getBooks,
    getBook
}