const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:user_id', async (req, res) => {
  try {
    const blogPostInfo = await Blog.findAll({
      where: { user_id: req.params.user_id },
      include: User,
    });
    const blogposts = blogPostInfo.map((blogpost) =>
      blogpost.get({ plain: true })
    );
    console.log(blogposts)
    const userData = await User.findByPk(req.params.user_id, {
      include: [Blog]
    })
    const user = userData.get({ plain: true })
    console.log(user);
    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;

    res.status(200).render('dashboard', { user, loggedIn, user_id });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:user_id/edit-post/:id', async (req, res) => {
  try {
    const blogPostInfo = await Blog.findByPk(req.params.id, {
      include: User,
    });
    const blogpost = blogPostInfo.get({ plain: true });
    console.log(blogpost);

    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;

    res.status(200).render('edit-post', { blogpost, loggedIn, user_id });
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:user_id/edit-post/:id', async (req, res) => {
//   try {
//     const blogPostInfo = await Blog.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogPostInfo) {
//       res.status(404).json({ message: 'No blog post found with this id!' });
//       return;
//     }

//     res.status(200).json(blogPostInfo);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.put('/:user_id/edit-post/:id', async (req, res) => {
//   try {
//     const blogPostInfo = await Blog.update(req.body, {
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!blogPostInfo) {
//       res.status(404).json({ message: 'No blog post found with this id!' });
//       return;
//     }

//     res.status(200).json(blogPostInfo);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });



module.exports = router;