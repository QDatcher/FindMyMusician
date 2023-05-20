const router = require('express').Router();
const { Posts, User, Comments } = require('../models');
const withAuth = require('../utils/auth');



router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
      const postData = await Posts.findAll({
        include: [
          {
            model: User,
            attributes: ['name', 'id'],
          },
          {
            model: Comments
          }
        ],
      });
  
      // Serialize data so the template can read it
      const posts = postData.map((post) => post.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('welcome', { 
        posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/account');
      return;
    }
  
    res.render('login');
  });
  
router.get('/signup', (req, res) => {
    res.render('signUp')
})

router.get('/profile', (req, res) => {
    if (req.session.logged_in) {
        res.render('/account');
        return;
      }else{
        res.redirect('/login')
      }
    
})

  module.exports = router;