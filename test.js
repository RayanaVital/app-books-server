const fs = require('fs');

const actualData = JSON.parse(fs.readFileSync('books.json'))
const newData = { id: 3, title: 'New Book' }

fs.writeFileSync('books.json', JSON.stringify([...actualData, newData]));


console.log( JSON.parse(fs.readFileSync('books.json')));