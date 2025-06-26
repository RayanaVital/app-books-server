const { Router } = require('express');
const {
    getFavorites,
    deleteFavorite,
    postFavorites
} = require('../controllers/favorites');

const router = Router();

router.get('/', getFavorites);

router.post('/', postFavorites);

router.delete('/:id', deleteFavorite);

module.exports = router;