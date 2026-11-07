const {Router}=require('express');
const route=Router();
const controller=require('../controllers/controller.js');

route.get('/map/:map_id', controller.getMap);
route.get('/characterPosition/:map_id', controller.getPositions)

module.exports=route;