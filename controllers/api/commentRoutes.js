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


router.comment('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
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
      res.status(404).json({ message: 'No comment found with this id!' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// // Upload a new comment.
// router.post('/:id', (req, res) => {
//   // Check the session to make sure user is logged in.
//   Comment.create({
//     comment_text: req.body.comment_text,
//     post_id: req.body.post_id,
//     // Use the id from the session.
//     user_id: req.session.user_id,
//   })
//     .then((dbCommentData) => res.json(dbCommentData))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// // Delete a comment.
// router.delete('/:id', (req, res) => {
//   Comment.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: 'No Comment found with this id' });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // Edit a comment.
// router.put('/:id', (req, res) => {
//   Comment.update(
//     {
//       comment_text: req.body.comment_text,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((dbPostData) => {
//       if (!dbPostData) {
//         res.status(404).json({ message: 'No comment found with this id' });
//         return;
//       }
//       res.json(dbPostData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;


// router.get('/', (req, res) => {
//   Comment.findAll()
//   .then(dbCommentData => res.json(dbCommentData))
//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });
// });

// router.post('/', withAuth, (req, res) => {
//   // Checks the session.
//   if (req.session) {
//     Comment.create({
//       comment_text: req.body.comment_text,
//       post_id: req.body.post_id,
//       // Uses the id from the session.
//       user_id: req.session.user_id,
//     })
//       .then(dbCommentData => res.json(dbCommentData))
//       .catch(err => {
//         console.log(err);
//         res.status(400).json(err);
//       });
//   }
// });

// router.delete('/:id', (req, res) => {
//   Comment.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbCommentData => {
//       if (!dbCommentData) {
//         res.status(404).json({ message: 'No comment found with this id' });
//         return;
//       }
//       res.json(dbCommentData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
