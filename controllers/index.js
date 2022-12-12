class Controllers {
    async homeGet(req, res) {
        res.render('home');
    }
}

module.exports = new Controllers();