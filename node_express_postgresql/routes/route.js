const {Router}=require('express');
const route=Router();
const controller=require('../controllers/controller.js');

route.get('/', controller.getUsers);
route.get('/new', controller.createUser)
route.get('/search/:value', controller.findUser)
route.get('/delete', controller.deleteALL)
route.post('/new', controller.insertUser)


module.exports=route;