function getBooks(req, res) {
    try {
        res.send('Hello World!');

    } catch (e) {
        res.status(500).send(e.message);
    }
}

module.exports = {
    getBooks
}