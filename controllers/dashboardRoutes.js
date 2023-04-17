const router = require('express').Router();
const { Blog, User } = require('../models');
//const withAuth = require('../utils/auth');

router.get('/:user_id', async (req, res) => {
  try {
    const blogPostInfo = await Blog.findAll({
      where: { user_id: req.params.user_id },
      include: User,
    });
    const blogposts = blogPostInfo.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;

    res.status(200).render('dashboard', { blogposts, loggedIn, user_id });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:user_id/edit-post/:id', async (req, res) => {
  try {
    const blogPostInfo = await Blog.findByPk(req.params.id, {
      where: { user_id: req.session.user_id },
      include: User,
    });
    const blogpost = blogPostInfo.get({ plain: true });
    console.log(blogpost);

    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;

    res.status(200).render('editpost', { blogpost, loggedIn, user_id });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newBlog = await Blog.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:user_id/edit-post/:id', async (req, res) => {
  try {
    const blogPostInfo = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostInfo) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogPostInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:user_id/edit-post/:id', async (req, res) => {
  try {
    const blogPostInfo = await Blog.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogPostInfo) {
      res.status(404).json({ message: 'No blogpost found with this id!' });
      return;
    }

    res.status(200).json(blogPostInfo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// const router = require('express').Router();
// const { Blog, User } = require('../models');
// //const withAuth = require('../utils/auth');

// router.get('/:user_id', async (req, res) => {
//   try {
//     const blogPostData = await BlogPost.findAll({
//       where: { user_id: req.params.user_id },
//       include: User,
//     });
//     const blogposts = blogPostData.map((blogpost) =>
//       blogpost.get({ plain: true })
//     );
//     const loggedIn = req.session.loggedIn;
//     const user_id = req.session.user_id;

//     res.status(200).render('dashboard', { blogposts, loggedIn, user_id });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/:user_id/editpost/:id', async (req, res) => {
//   try {
//     const blogPostData = await BlogPost.findByPk(req.params.id, {
//       where: { user_id: req.session.user_id },
//       include: User,
//     });
//     const blogpost = blogPostData.get({ plain: true });
//     console.log(blogpost);

//     const loggedIn = req.session.loggedIn;
//     const user_id = req.session.user_id;

//     res.status(200).render('editpost', { blogpost, loggedIn, user_id });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//     const newBlogPost = await BlogPost.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });
//     res.status(200).json(newBlogPost);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:user_id/editpost/:id', async (req, res) => {
//   try {
//     const blogPostData = await BlogPost.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogPostData) {
//       res.status(404).json({ message: 'No blogpost found with this id!' });
//       return;
//     }

//     res.status(200).json(blogPostData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:user_id/editpost/:id', async (req, res) => {
//   try {
//     const blogPostData = await BlogPost.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogPostData) {
//       res.status(404).json({ message: 'No blogpost found with this id!' });
//       return;
//     }

//     res.status(200).json(blogPostData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;










// const router = require('express').Router();
// const { Blog, User } = require('../models');
// const withAuth = require('../utils/auth');

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
// router.get('/homepage', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Blog }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('homepage', {
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
//     res.redirect('/homepage');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
