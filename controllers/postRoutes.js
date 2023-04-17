// const router = require('express').Router();

// router.get('/', async (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }
//   res.render('post');
// });

// module.exports = router;

const router = require('express').Router();
const Blog = require('../models/Blog');
const User = require('../models/User');
const Comment = require('../models/Comment');

router.get('/:post_id', async (req, res) => {
  try {
    const blogPost = await Blog.findByPk(req.params.post_id, {
      include: [
        {
          model: Comment,
          include: {
            model: User,
            attributes: {
              exclude: ['password'],
            },},
        },],
    });
    const blog = blogPost.get({ plain: true });

    const loggedIn = req.session.loggedIn;
    const user_id = req.session.user_id;
    res.render('post', { blog, loggedIn, user_id });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post('/:post_id', async (req, res) => {
  try {
    const newComment = await Comment.create({
      description: req.body.description,
      user_id: req.session.user_id,
      blogpost_id: req.params.post_id,
    });
    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:post_id/comment/:comment_id', async (req, res) => {
  try {
    const commentData = await Comment.destroy({
      where: {
        id: req.params.comment_id,
        user_id: req.session.user_id,
      },
    });

    if (!commentData) {
      res.status(404).json({ message: 'Sorry, but there is no comment with that ID!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;