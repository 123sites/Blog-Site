const router = require("express").Router();

const { User } = require("../../models");

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
console.log('after router.post root');

// Has users log-in.
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    // If no data exists with the associated user, return error.
    if (!userData) {
      res
        .status(400)
            // If it is not valid, notify the user
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
    console.log('after router.post login');
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
    console.log("logout api, user-routes, end")
  }
});

module.exports = router;
