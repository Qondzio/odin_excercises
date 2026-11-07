const query=require('../database/queries.js');

async function getUsers(req,res){
    const result=await query.getUsers();
    res.render('usersGET', {result: result});
}

function createUser(req,res){
    res.render('newUserGET');
}

async function insertUser(req,res){
    const {username}=req.body;
    query.insertUser(username);
    res.redirect('/');
}

async function findUser(req,res){
    const result=await query.findUser(req.params.value)
    res.render('foundUser', {result: result});
}

async function deleteALL(req,res){
    await query.deleteALL();
    res.redirect("/");
}

module.exports={getUsers,insertUser,createUser,findUser,deleteALL};