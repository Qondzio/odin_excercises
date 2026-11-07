const bcrypt=require('bcrypt');
const query=require('../database/queries.js');
const passport=require('../passport.js');

async function showMessagesGET(req,res){
    try {
        const {rows}=await query.getMessages();
        res.render('index', {messages:rows, user:req.user})
    } catch (error) {
        return console.log(error);
    }
}

async function signUpGET(req,res){
    res.render('sign-up')
}

async function signInGET(req,res){
    res.render('sign-in', {error: req.query.error})
}

async function singUpPOST(req,res){
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await query.addUser(req.body.username,hashedPassword);
        res.redirect("/");
    } catch (error) {
        return console.log(error);
        
    }
}

async function secretAdminGET(req,res){
    res.render('secret-admin', {user:req.user});
}

async function secretMembershipGET(req,res){
    res.render('secret-membership', {user:req.user});
}

async function secretAdminPOST(req,res){
    if(req.body.code === 'czexman'){
        await query.promoteAdmin(req.user.id);
    }
    res.redirect('/');
}

async function secretMembershipPOST(req,res){
    if(req.body.code === 'czexman'){
        await query.promoteMember(req.user.id);
    }
    res.redirect('/');
}

async function addMessageGET(req,res){
    res.render('add-message', {user:req.user});
}

async function addMessagePOST(req,res){
    try {
        await query.addMessage(req.body.message, req.user.id)
        res.redirect('/')
    } catch (error) {
        return console.log(error);
        
    }
}

module.exports={showMessagesGET,signUpGET,singUpPOST,secretAdminGET,signInGET,secretAdminPOST, secretMembershipGET, secretMembershipPOST,addMessageGET,
     addMessagePOST}