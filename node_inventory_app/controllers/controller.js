const query=require('../db/queries.js');

async function showCategories(req,res){
    const result=await query.usersGET();
    res.render("categoriesGET", {categories: result})
}

async function showWeapons(req,res){
    const weaponType=req.params.weaponId;
    const result=await query.weaponsGET(weaponType);
    res.render("weaponsGET", {weapons: result, weaponType:weaponType});
}

async function addWeaponGET(req,res){
    const weaponType=req.params.weaponId;
    res.render("addWeaponGET", {weaponType: weaponType});
}

async function addWeaponPOST(req,res){
    const {weaponName,rarity,description,imageURL}=req.body;
    await query.weaponsPOST(weaponName,rarity,description,imageURL, req.params.weaponId)
    res.redirect(`/weapons/${req.params.weaponId}`);
}

async function deleteWeaponPOST(req,res){
    const id=req.params.id;
    await query.deleteWeaponsPOST(id);
    res.redirect(req.get('Referer'));
}

async function addCategoryGET(req,res){
    res.render("createCategoryGET");
}

async function addCategoryPOST(req,res){
    const {categoryName,imageURL}=req.body;
    await query.addCategoryPOST(categoryName,imageURL);
    res.redirect('/');
}

module.exports={showCategories, showWeapons,addWeaponGET, addWeaponPOST,deleteWeaponPOST, addCategoryGET, addCategoryPOST};