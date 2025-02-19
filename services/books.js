const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json', 'utf8'));
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const resultBook = books.filter(book => book.id == id)[0];
    return resultBook;
}

module.exports = {
    getAllBooks,
    getBookById
};