const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json', 'utf8'));
}

function getBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const resultBook = books.filter(book => book.id == id)[0];
    return resultBook;
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const newBooksList = [...books, newBook ];
    fs.writeFileSync('books.json', JSON.stringify(newBooksList));
}

function editBook(editData, id) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const updatedBooks = books.map(book =>
        book.id === id ? { ...book, ...editData } : book
    );
    fs.writeFileSync('books.json', JSON.stringify(updatedBooks));
}

function deleteBookById(id) {
    const books = JSON.parse(fs.readFileSync('books.json'));
    const updatedBooks = books.filter(book => book.id !== id);
    fs.writeFileSync('books.json', JSON.stringify(updatedBooks));
}


module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    editBook,
    deleteBookById
};