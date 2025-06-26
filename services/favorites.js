const fs = require('fs');

function getAllFavorites() {
    return JSON.parse(fs.readFileSync('favorites.json', 'utf8'));
}


function deleteFavoriteById(id) {
    const favorites = JSON.parse(fs.readFileSync("favorites.json", "utf8"));
    const updatedFavorites = favorites.filter(favorite => favorite.id !== id);
    fs.writeFileSync("favorites.json", JSON.stringify(updatedFavorites));
}

function insertFavorite(newFavorite) {
    const books = JSON.parse(fs.readFileSync('books.json', 'utf8'));
    const favorites = JSON.parse(fs.readFileSync('favorites.json', 'utf8'));

    const insertedBook = books.find(book => book.id === id);
    const newFavoritesList = [...favorites, insertedBook];
    
    fs.writeFileSync('favorites.json', JSON.stringify(newFavoritesList));
}



module.exports = {
    getAllFavorites,    
    deleteFavoriteById,
    insertFavorite
}