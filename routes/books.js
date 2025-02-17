const { Router } = require('express');
const {getBooks} = require('../controllers/books');

const router = Router();

router.get('/', getBooks);

router.post('/', (req, res) => {  
  res.send('Got a POST request');
});

router.patch('/', (req, res) => { 
  res.send('Got a PATCH request');
});

router.delete('/', (req, res) => {
  res.send('Got a DELETE request');
});

module.exports = router;