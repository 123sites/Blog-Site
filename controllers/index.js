const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');
const dashboardRoutes = require('./dashboard-routes');


router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;


