const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});


// const router = require('express').Router();

// router.get('/', async (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
//   res.render('signup');
// });

module.exports = router;