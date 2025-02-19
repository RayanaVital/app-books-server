const { Router } = require('express');
const {getBooks, getBook, postBook} = require('../controllers/books');

const router = Router();

router.get('/', getBooks);

router.get('/:id', getBook);

router.post('/', postBook);


router.patch('/', (req, res) => { 
  res.send('Got a PATCH request');
});

router.delete('/', (req, res) => {
  res.send('Got a DELETE request');
});

module.exports = router;