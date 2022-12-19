const router = require('express').Router();

const controllers = require('./controllers');
const authController = require('./controllers/AuthController');
const { requireAuth } = require('./middlewares/authMiddleware');


// router.get('*', req)

router.get('/', requireAuth, controllers.homeGet);

router.route('/login')
    .get(authController.loginGet)
    .post(authController.loginPost);

router.get('/logout', authController.logoutGet);

module.exports = router;
