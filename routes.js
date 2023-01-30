const router = require('express').Router();

const controller = require('./controllers');
const authController = require('./controllers/AuthController');
const { requireAuth } = require('./middlewares/authMiddleware');

router.get('/', requireAuth, controller.indexGet);

router.route('/login')
    .get(authController.loginGet)
    .post(authController.loginPost);

router.get('/logout', authController.logoutGet);

router.route('/dashboard')
.get(requireAuth, controller.dashboardGet)

router.route('/dashboard/userlist')
    .get(requireAuth, controller.userlistGet)

module.exports = router;
