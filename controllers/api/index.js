const router = require('express').Router();
const userRoutes = require('./UserDataRoute');
const postRoutes = require('./PostDataRoutes');
const commentsRoutes = require('./CommentsDataRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentsRoutes)

module.exports = router;
