const router = require('express').Router();
const userRoutes = require('./UserDataRoute');
const postRoutes = require('./PostDataRoutes');

router.use('/users', userRoutes);
router.use('/projects', postRoutes);

module.exports = router;
