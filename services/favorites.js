const fs = require('fs');

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json', 'utf8'));
}

module.exports = {
    getAllFavorites,    
}