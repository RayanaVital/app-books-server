const fs = require('fs');


function getBooks(req, res) {
    try {
        const books = JSON.parse(fs.readFileSync('books.json', 'utf8'));
        res.send(books);

    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = {
    getBooks
}