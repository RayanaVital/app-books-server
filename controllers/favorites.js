const { getAllFavorites } = require('../services/favorites');
const { insertFavorite } = require('../services/favorites');
const { deleteFavoriteById } = require('../services/favorites');

function getFavorites(req, res) {
    try {
        const favorites = getAllFavorites();
        res.send(favorites);
    } catch (e) {
        res.status(500).send(e.message);
    }
}

function postFavorites(req, res) {
    try {
        const id = req.params.id
        insertFavorite(id);
        res.status(201).send('Favorite inserted');
    } catch (e) {
        res.status(500).send(e.message);
    }
}

function deleteFavorite(req, res) {
    try {
        const id = req.params.id;

        if (isNaN(id)) {
            res.status(422).send('Invalid ID');
            return;
        }

        deleteFavoriteById(Number(id));
        res.status(200).send('Favorite deleted');
    } catch (e) {
        res.status(500).send(e.message);
    }
}


module.exports = {
    getFavorites,
    postFavorites,
    deleteFavorite
}