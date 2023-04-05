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

const router = require("express").Router();

const { User } = require("../../models");
const withAuth = require("../../utils/auth");

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ 
			where: { username: req.body.username } 
		});

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

// router.post('/', async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/login', async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;

// // Create a new user using the form input values from the login page (template)
// router.post('/', (req, res) => {
//   User.create({
//     username: req.body.username,
//     email: req.body.email,
//     password: req.body.password,
//   })
//     .then((dbUserData) => {
//       req.session.save(() => {
//         req.session.user_id = dbUserData.id;
//         req.session.username = dbUserData.username;
//         req.session.loggedIn = true;

//         res.json(dbUserData);
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // Allow users to login
// router.post('/login', (req, res) => {
//   User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   }).then((dbUserData) => {
//     // If no data exists that means the associated user does not exist at all, return error
//     if (!dbUserData) {
//       res.status(400).json({ message: 'No user with that email address!' });
//       return;
//     }

//     // Check the submitted password
//     const validPassword = dbUserData.checkPassword(req.body.password);
//     // If it is not valid, notify the user
//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect password!' });
//       return;
//     }
//     // Otherwise, save the session so we can refer to these parameters and update the state of the application accordingly
//     req.session.save(() => {
//       req.session.user_id = dbUserData.id;
//       req.session.username = dbUserData.username;
//       req.session.loggedIn = true;
//       res.json({ user: dbUserData, message: 'You are now logged in!' });
//     });
//   });
// });

// // Terminate sessions and redirect to main page
// router.post('/logout', (req, res) => {
//   if (req.session.loggedIn) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;

// // Creates a new user, log-in template.
// router.post("/", async (req, res) => {
//   try {
//     const userData = await User.create(req.body);

//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.status(200).json(userData);
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
// console.log("after router.post root");

// // Has the user's log-in.
// router.post("/login", async (req, res) => {
//   try {
//     const userData = await User.findOne({ where: { email: req.body.email } });
//     // If no data exists with the associated user, return error.
//     if (!userData) {
//       res
//         .status(400)
//         // If it is not valid, notify the user.
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }
// console.log("after router.post login");
//     // If the password is not valid, return error.
//     const validPassword = await userData.checkPassword(req.body.password);
//     // If it is not valid, notify the user.
//     if (!validPassword) {
//       res
//         .status(400)
//         .json({ message: "Incorrect email or password, please try again" });
//       return;
//     }
//     console.log("after router.post login, before req.session.save");
//     // Otherwise, save session, so we can refer to these parameters & update the application.
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;

//       res.json({ user: userData, message: "You are now logged in!" });
//     });
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });
// console.log(userData.checkPassword(req.body.password));
// // End sessions & redirect to the main page.
// router.post("/logout", (req, res) => {
//   if (req.session.logged_in) {
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//     console.log("logout api, user-routes, end");
//   }
// });

// module.exports = router;
