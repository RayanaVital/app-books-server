const fs = require('fs');

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json', 'utf8'));
}


function deleteFavoriteById(id) {
    const favorites = JSON.parse(fs.readFileSync("favorites.json", "utf8"));
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    fs.writeFileSync("favorites.json", JSON.stringify(updatedFavorites));
}



module.exports = {
    getAllFavorites,    
    deleteFavoriteById
}