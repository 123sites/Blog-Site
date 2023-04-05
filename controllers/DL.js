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



// const router = require('express').Router();
// const { Post, User, Comment } = require('../models');

// // In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// // We render the homepage.handlebars template
// router.get('/', (req, res) => {
//   Post.findAll({
//     attributes: ['id', 'title', 'description', 'created_at', 'user_id'],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       // Serialize the data, essentially making it an easier object to iterate through
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       // Reverse the order of all posts so the newest posts show near the top
//       posts.reverse();
//       // Render the homepage template and include the posts object we just declared
//       res.render('homepage', {
//         posts,
//         loggedIn: req.session.loggedIn,
//         username: req.session.username,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // Renders a single post with more detail
// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id, // params == endpoint url data
//     },
//     attributes: ['id', 'title', 'created_at', 'user_id', 'description'],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       const title = dbPostData.dataValues.title;
//       const user = dbPostData.dataValues.user.username;
//       const date = dbPostData.dataValues.created_at;
//       const description = dbPostData.dataValues.description;
//       const post = {
//         title,
//         date,
//         user,
//         description,
//         comments: [],
//       };
//       // For each comment, push it to the array inside our object
//       for (let i = 0; i < dbPostData.dataValues.comments.length; i++) {
//         let username = dbPostData.dataValues.comments[i].user.username;
//         let commentText = dbPostData.dataValues.comments[i].comment_text;
//         let commentDate =
//           dbPostData.dataValues.comments[i].dataValues.created_at;
//         let user_id = dbPostData.dataValues.comments[i].dataValues.user_id;
//         let comment_id = dbPostData.dataValues.comments[i].dataValues.id;

//         post.comments.push({
//           user: username,
//           userId: user_id,
//           text: commentText,
//           date: commentDate,
//           commentId: comment_id,
//           // Check the username of each comment and return 'true' if username matches logged in user
//           usersComment: username == req.session.username,
//         });
//       }

//       res.render('single-post', {
//         post,
//         loggedIn: req.session.loggedIn,
//         username: req.session.username,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;









// const router = require('express').Router();
// const { Post, User, Comment } = require('../models');

// // In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// // We render the homepage.handlebars template
// router.get('/', (req, res) => {
//   Post.findAll({
//     attributes: ['id', 'title', 'description', 'created_at', 'user_id'],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       // Serialize the data, essentially making it an easier object to iterate through
//       const posts = dbPostData.map((post) => post.get({ plain: true }));
//       // Reverse the order of all posts so the newest posts show near the top
//       posts.reverse();
//       // Render the homepage template and include the posts object we just declared
//       res.render('homepage', {
//         posts,
//         loggedIn: req.session.loggedIn,
//         username: req.session.username,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // Renders a single post with more detail
// router.get('/post/:id', (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id, // params == endpoint url data
//     },
//     attributes: ['id', 'title', 'created_at', 'user_id', 'description'],
//     include: [
//       {
//         model: Comment,
//         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
//         include: {
//           model: User,
//           attributes: ['username'],
//         },
//       },
//       {
//         model: User,
//         attributes: ['username'],
//       },
//     ],
//   })
//     .then((dbPostData) => {
//       const title = dbPostData.dataValues.title;
//       const user = dbPostData.dataValues.user.username;
//       const date = dbPostData.dataValues.created_at;
//       const description = dbPostData.dataValues.description;
//       const post = {
//         title,
//         date,
//         user,
//         description,
//         comments: [],
//       };
//       // For each comment, push it to the array inside our object
//       for (let i = 0; i < dbPostData.dataValues.comments.length; i++) {
//         let username = dbPostData.dataValues.comments[i].user.username;
//         let commentText = dbPostData.dataValues.comments[i].comment_text;
//         let commentDate =
//           dbPostData.dataValues.comments[i].dataValues.created_at;
//         let user_id = dbPostData.dataValues.comments[i].dataValues.user_id;
//         let comment_id = dbPostData.dataValues.comments[i].dataValues.id;

//         post.comments.push({
//           user: username,
//           userId: user_id,
//           text: commentText,
//           date: commentDate,
//           commentId: comment_id,
//           // Check the username of each comment and return 'true' if username matches logged in user
//           usersComment: username == req.session.username,
//         });
//       }

//       res.render('single-post', {
//         post,
//         loggedIn: req.session.loggedIn,
//         username: req.session.username,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router;
















// // const router = require('express').Router();
// // const { Post, User, Comment } = require('../models');

// // // Path: main.handlebars template renders, always and inside the {{{body}}} section.
// // // Render the homepage.handlebars template.
// // router.get('/', (req, res) => {
// //   Post.findAll({
// //     // Find all the users.
// //     // See dashboard-routes.js for more info.
// //     attributes: ['id', 'title', 'description', 'created_at', 'user_id'],
// //     include: [
// //       {
// //         model: Comment,
// //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
// //         include: {
// //           model: User,
// //           attributes: ['username'],
// //         },
// //       },
// //       {
// //         model: User,
// //         attributes: ['username'],
// //       },
// //     ],
// //   })

// //     .then((dbPostData) => {
// //       // Serialize the data, easier object to repeatedly go through.
// //       const posts = dbPostData.map((post) => post.get({ plain: true }));
// //       console.log(posts);
// //       // Reverse order of all posts, so the newest posts show near the top.
// //       posts.reverse();
       
// //       // Render the homepage template & include the post object, just declared.
// //       res.render('homepage', {
// //         posts,
// //         loggedIn: req.session.loggedIn,
// //         username: req.session.username,
// //       });
     
// //     })
     
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });
// // console.log(Post.findAll);

// // // Renders a single post with more detail.
// // router.get('/post/:id', (req, res) => {
// //   Post.findOne({
// //     where: {
// //       id: req.params.id, // params == endpoint url data.
// //     },
// //         // See dashboard-routes.js for more info.
// //     attributes: ['title', 'description', 'created_at', 'id'],
// //     include: [
// //       {
// //         model: Comment,
// //         //  See comment-routes.js for more info.
// //         attributes: ['id,' 'comment_text', 'post_id', 'user_id', 'created_at'],
// //         include: {
// //           model: User,
// //           attributes: ['username,'],
// //         },
// //       },
// //       {
// //         model: User,
// //         attributes: ['username,'],
// //       },
// //     ],
// //   }) // End of Post.findOne
    
// //     .then((dbPostData) => {
// //       const title = dbPostData.dataValues.title;
// //       const user = dbPostData.dataValues.user.username;
// //       const date = dbPostData.dataValues.created_at;
// //       const description = dbPostData.dataValues.description;
// //       const post = {
// //         title,
// //         date,
// //         user,
// //         description,
// //         comments: [],
// //       };
// //       // Each comment = push it to the array inside the object.
// //       for (let i = 0; i < dbPostData.dataValues.comments.length; i++) {
// //         let username = dbPostData.dataValues.comments[i].user.username;
// //         let commentText = dbPostData.dataValues.comments[i].comment_text;
// //         let commentDate =
// //           dbPostData.dataValues.comments[i].dataValues.created_at;
// //         let user_id = dbPostData.dataValues.comments[i].dataValues.user_id;
// //         let comment_id = dbPostData.dataValues.comments[i].dataValues.id;

// //         post.comments.push({
// //           user: username,
// //           userId: user_id,
// //           text: commentText,
// //           date: commentDate,
// //           commentId: comment_id,
// //           // Check the username of the comments.  True if it matches the logged-in user.
// //           usersComment: username == req.session.username,
// //         });
// //       }

// //       res.render('single-post', {
// //         post,
// //         loggedIn: req.session.loggedIn,
// //         username: req.session.username,
// //       });
// //     })
// //     .catch((err) => {
// //       console.log(err);
// //       res.status(500).json(err);
// //     });
// // });

// // // Shows the login page (template)
// // router.get('/login', (req, res) => {
// //   res.render('login');
// // });

// // module.exports = router;