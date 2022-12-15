const router = require('express').Router();

const controllers = require('./controllers');
const authController = require('./controllers/auth');

router.get('/', controllers.homeGet);

router.route('/registration')
    .get(authController.registrationGet)
    .post(authController.registrationPost);

router.route('/login')
    .get(authController.loginGet)
    .post(authController.loginPost);

router.get('/logout', authController.logoutGet);

module.exports = router;