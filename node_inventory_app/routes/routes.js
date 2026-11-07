const {Router}=require('express');
const route=Router();
const controller=require('../controllers/controller.js');


route.get('/', controller.showCategories)
route.get('/weapons/:weaponId', controller.showWeapons)
route.get('/addWeapon/:weaponId', controller.addWeaponGET)
route.get('/addCategory', controller.addCategoryGET)
route.post('/addWeapon/:weaponId', controller.addWeaponPOST)
route.post('/delete/:id', controller.deleteWeaponPOST)
route.post('/addCategory', controller.addCategoryPOST)

module.exports=route;