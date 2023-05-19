const router = require('express').Router();
const { Posts, User } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Posts.findAll({
        exclude: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      // Serialize data so the template can read it
      const projects = projectData.map((project) => project.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('main', { 
        projects, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
router.get('/signup', (req, res) => {
    res.render('signUp')
})

  module.exports = router;