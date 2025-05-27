const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());


const books = require('./routes/books');

app.use('/books', books);
app.use(cors({
  origin: '*', 
}))


const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});