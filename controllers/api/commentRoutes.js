// Use top or bottom???????????????????????????????????????????

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

const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', (req,res) => {
  Comment.findAll({})
  .then(commentData => res.json(commentData))
  .catch(err => {
      console.log(err);
      res.status(500).json(err)
  });
});

router.get('/:id', (req, res) => {
  Comment.findAll({
          where: {
              id: req.params.id
          }
      })
      .then(commentData => res.json(commentData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});


router.post('/', async (req, res) => {
try {
  const newComment = await Comment.create({
    ...req.body,
    user_id: req.session.user_id,
  });
  res.json(newComment);
} catch (err) {
  res.status(500).json(err);
}
});


router.delete('/:id', withAuth, async (req, res) => {
try {
  const commentData = await Comment.destroy({
    where: {
      id: req.params.id,
      user_id: req.session.user_id,
    },
  });
  if (!commentData) {
    res.status(404).json({ message: '404 Blog ID not found' });
    return;
  }
  res.status(200).json(commentData);
} catch (err) {
  res.status(500).json(err);
}
});


module.exports = router;


