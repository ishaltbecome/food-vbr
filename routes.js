const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/registration', (req, res) => {
    res.render('registration');
});

router.post('/registration', (req, res) => {
    res.json(req.body);
});

module.exports = router;