const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  try {
    res.send('Hello World!');

  } catch (e) {
    res.status(500).send(e.message);
  }
});

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