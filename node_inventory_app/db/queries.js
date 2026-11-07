const pool=require('./db.js');

async function usersGET(){
    const {rows}=await pool.query("SELECT * FROM CATEGORY");
    return rows;
}

async function weaponsGET(weaponType){
    const {rows}=await pool.query(`select weapons.id,weapons.name, rarity.name AS rarity, rarity.color, weapons.description, weapons.imageurl from weapons join rarity on rarity_id=rarity.id where category_id=${weaponType}`);
    return rows;
}

async function weaponsPOST(weaponName,rarity,description,imageURL, weaponId){
    await pool.query(`insert into weapons (name,category_id,rarity_id,description,imageurl) values ('${weaponName}','${weaponId}','${rarity}','${description}','${imageURL}');`);
}

async function deleteWeaponsPOST(weaponId){
    await pool.query(`delete from weapons where id='${weaponId}';`);
}

async function addCategoryPOST(categoryName,imageURL){
    await pool.query(`insert into category (name,imageurl) values ('${categoryName}','${imageURL}');`);
}

module.exports={usersGET, weaponsGET, weaponsPOST,deleteWeaponsPOST, addCategoryPOST};