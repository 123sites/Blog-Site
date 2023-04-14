const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('post');
});

module.exports = router;