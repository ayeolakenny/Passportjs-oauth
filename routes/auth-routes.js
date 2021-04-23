const router = require("express").Router();
const passport = require("passport");

//auth login
router.get("/login", (req, res) => {
  res.render("login", { user: req.user });
});

//auth logout
router.get("/logout", (req, res) => {
  //handle with passport
  req.logOut();
  res.redirect("/");
});

//auth with google
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile"],
  })
);

//auth with facebook
router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["public_profile", "email"],
  })
);

//auth with github
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["user"],
  })
);

//callback route for google to redirect to
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  // res.send(req.user);
  res.redirect("/profile");
});

//callback route for facebook to redirect to
router.get(
  "/facebook/redirect",
  passport.authenticate("facebook"),
  (req, res) => {
    // res.send(req.user);
    res.redirect("/profile");
  }
);

//callback route for github to redirect to
router.get("/github/redirect", passport.authenticate("github"), (req, res) => {
  // res.send(req.user);
  res.redirect("/profile");
});

module.exports = router;
