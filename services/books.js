const fs = require('fs');

function getAllBooks() {
    return JSON.parse(fs.readFileSync('books.json', 'utf8'));
}

module.exports = {
    getAllBooks
};