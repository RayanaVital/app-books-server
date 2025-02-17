const { getAllBooks } = require('../services/books');

function getBooks(req, res) {
    try {
        const books = getAllBooks();
        res.send(books);

    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = {
    getBooks
}