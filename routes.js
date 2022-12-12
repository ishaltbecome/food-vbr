const router = require('express').Router();

const controllers = require('./controllers');
const authController = require('./controllers/auth');

router.get('/', controllers.homeGet);

router.get('/registration', authController.registrationGet);
router.post('/registration', authController.registrationPost);

module.exports = router;