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
            attributes: ['username', 'id'],
          },
          {
            model: Comments
          }
        ],
        order: [['date_created', 'DESC']]
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
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
});
  
router.get('/signup', (req, res) => {
    res.render('signUp')
})

// router.get('/profile', (req, res) => {
//     if (req.session.logged_in) {
//         res.render('/account');
//         return;
//       }else{
//         res.redirect('/login')
//       }
    
// })

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Posts }],
      });
  
      const user = userData.get({ plain: true });
      

      res.render('account', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/posts/:id', async (req, res) => {
    try {
      const postData = await Posts.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['username'],
          },
          {
            model: Comments
          }
        ],
      });
      
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;