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

// Creates a new user, log-in template.
router.post("/", async (req, res) => {
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
console.log("after router.post root");

// Has the user's log-in.
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    // If no data exists with the associated user, return error.
    if (!userData) {
      res
        .status(400)
        // If it is not valid, notify the user.
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);
    //
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    console.log("after router.post login");
    // Otherwise, save session, so we can refer to these parameters & update the application.
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
// End sessions & redirect to the main page.
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
    console.log("logout api, user-routes, end");
  }
});

module.exports = router;
