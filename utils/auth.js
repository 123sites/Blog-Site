const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    next();
  }
};
console.log("after withAuth");

module.exports = withAuth;
