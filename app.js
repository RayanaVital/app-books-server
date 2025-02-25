const express = require('express');
const app = express();
app.use(express.json());


const books = require('./routes/books');

app.use('/books', books);


const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});