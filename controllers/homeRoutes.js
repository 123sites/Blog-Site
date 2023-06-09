// Enter a comment and click on the submit button while signed in.
// Comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created

// Click on the dashboard option in the navigation, I am taken to the dashboard and presented with any blog posts
// I have already created and the option to add a new blog post. Click on the button to add a new blog post.
// I am prompted to enter both a title and contents for my blog post.
// I click on the button to create a new blog post.
// The title & contents of my post are saved and I am taken back to an updated dashboard with my new blog post.

// Click on one of my existing posts in the dashboard, I'm able to delete or update my post & taken back to an updated dashboard.
// Click on the logout option in the navigation, I'm signed out of the site.
// When idle on the site for more than a set time, I'm able to view comments but I am prompted to log in again
// before I can add, update, or delete comments.

// const router = require("express").Router();
// // const sequelize = require("../config/connection");


const router = require('express').Router();
const { Blog, Comment, User } = require("../models");

router.get('/', async (req, res) => {
  try {
    const blogData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: ['password'],
          },
        },],
    });

    if (!blogData) {
      res.status(404).json({ message: 'No data found!' });
    }

    const blogs = blogData.map((blog) =>
      blog.get({ plain: true })
    );
    console.log(blogs);

    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;

    res.render('homepage', { blogs, loggedIn, user_id });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;















// // const withAuth = require("../utils/auth");

// const router = require('express').Router();

// // const { Blog, User } = require('../models');
// // const withAuth = require('../utils/auth');

// const Blog = require('../models/Blog');
// const User = require('../models/User');
// const withAuth = require('../utils/auth')

// router.get('/', async (req, res) => {
//   try {
//     // Get all blogs and JOIN with user data
//     const blogData = await Blog.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     // Serialize data so the template can read it
//     const blogs = blogData.map((blog) => blog.get({ plain: true }));


//     // Pass serialized data and session flag into template
//     res.render('homepage', { 
//       blogs, 
//       logged_in: req.session.logged_in 
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/blog/:id', async (req, res) => {
//   try {
//     const blogData = await blog.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const blog = blogData.get({ plain: true });

//     res.render('blog', {
//       ...blog,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/dashboard', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Blog }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('dashboard', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/dashboard');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;











// router.get('/', async (req, res) => {
// 	try {
// 		const blogData = await Blog.findAll({
// 			include: [{
// 				model: User,
// 				attributes: ['username'],
// 			},],
// 		});

// 		const blogs = blogData.map((blog) => blog.get({
// 			plain: true
// 		}));

// 		res.render('homepage', {
// 			blogs,
// 			logged_in: req.session.logged_in
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// router.get('/blog/:id', async (req, res) => {
// 	try {
// 		const blogData = await Blog.findByPk(req.params.id, {
// 			include: [
// 				{
// 					model: User,
// 					attributes: ['username'],
// 				}, {
// 					model: Comment,
// 					include: [
// 						User
// 					]
// 				}
// 			],
// 		});

// 		const blog = blogData.get({
// 			plain: true
// 		});

// 		res.render('blog', {
// 			...blog,
// 			logged_in: req.session.logged_in
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// router.get('/dashboard', withAuth, async (req, res) => {
// 	try {
// 		const userData = await User.findByPk(req.session.user_id, {
// 			attributes: {
// 				exclude: ['password']
// 			},
// 			include: [{
// 				model: Blog
// 			}],
// 		});

// 		const user = userData.get({
// 			plain: true
// 		});

// 		res.render('dashboard', {
// 			...user,
// 			logged_in: true
// 		});
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });

// router.get('/login', (req, res) => {
// 	if (req.session.logged_in) {
// 		res.redirect('/dashboard');
// 		return;
// 	}

// 	res.render('login');
// });

// router.get('/signUp', (req, res) => {
// 	if (req.session.logged_in) {
// 		res.redirect('/dashboard');
// 		return;
// 	}
// 	res.render('signUp');
// });


// module.exports = router;





