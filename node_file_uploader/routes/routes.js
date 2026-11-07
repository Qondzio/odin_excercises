const {Router}=require('express');
const route=Router();
const controller=require('../controller/controller.js');
const passport=require('../passport.js');
const validator=require('../controller/validate-sign-up.js');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

route.get('/files/:user/:directory', controller.filesGET)
route.get('/', controller.loginGET);
route.get('/sign-up', controller.signUpGET);
route.get('/log-out', (req, res, next) => {
    req.logout(err=>{
        if(err){
            return next(err);
        }
    });
    res.redirect('/');
});


route.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/sign-up"
  }));
route.post('/sign-up', validator.validateUser,controller.signUpPOST);
route.post('/addDirectory', validator.validateDirectory, controller.addDirectoryPOST);
route.post('/addFile/:dirId', upload.array('file'), controller.filesPOST);
route.post('/deleteFile/:folder/:publicID', controller.fileDeletePOST);





module.exports=route;