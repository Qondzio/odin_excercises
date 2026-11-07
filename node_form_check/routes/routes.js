const {Router}=require("express");
const controller=require('../controllers/controller.js')

const router=Router();
router.get('/', controller.usersListGet)
router.get('/create', controller.usersCreateGet)
router.get("/:id/update", controller.usersUpdateGet)
router.post('/create', controller.usersCreatePost)
router.post("/:id/update", controller.usersUpdatePost)
router.post("/:id/delete", controller.usersDeletePost);

module.exports = router;