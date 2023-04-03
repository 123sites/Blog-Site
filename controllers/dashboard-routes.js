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

const router = require('express').Router();
const { Post, Comment, User } = require('../models');
const withAuth = require('../../utils/auth');

// Return all posts associated with the user
router.get('/', withAuth, (req, res) => {
  // New route returns all posts associated with user, can extract this through 'req.session.user_id'
  Post.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ['id', 'title', 'created_at', 'user_id', 'description'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
    ],
  })
    .then((dbPostData) => {
      // Declares an empty object to hold all the needed data
      const posts = [];

      // Check how many posts a user has so we can run a loop or just return the single data
      if (dbPostData.length == 1) {
        const title = dbPostData[0].dataValues.title;
        const description = dbPostData[0].dataValues.description;
        const date = dbPostData[0].dataValues.created_at;
        const postId = dbPostData[0].dataValues.id;
        posts.push({ postId, title, description, date });
      } else {
        dbPostData.forEach((post) => {
          const title = post.dataValues.title;
          const description = post.dataValues.description;
          const date = post.dataValues.created_at;
          const postId = post.dataValues.id;
          posts.push({ postId, title, description, date });
        });
      }
      posts.reverse();
      res.render('dashboard', {
        posts,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;