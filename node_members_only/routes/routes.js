const {Router}=require('express');
const app=Router();
const controller=require('../controllers/controller.js');
const passport=require('../passport.js')

// app.post('/log-in', passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/"
//   }))

app.post('/sign-up', controller.singUpPOST);
app.post('/sign-in', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-in?error=error"
  }));
app.post('/secretAdmin', controller.secretAdminPOST)
app.post('/secretMembership', controller.secretMembershipPOST)
app.post('/addMessage', controller.addMessagePOST);

app.get('/', controller.showMessagesGET);
app.get('/sign-up', controller.signUpGET);
app.get('/secretAdmin', controller.secretAdminGET)
app.get('/secretMembership', controller.secretMembershipGET)
app.get('/sign-in', controller.signInGET)
app.get('/addMessage', controller.addMessageGET);
app.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
// app.get("/log-out", (req, res, next) => {
//   req.logout((err) => {
//     if (err) {
//       return next(err);
//     }
//     res.redirect("/");
//   });
// });

module.exports=app;