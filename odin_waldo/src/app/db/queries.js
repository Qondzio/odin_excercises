const pool=require('./db_connect.js');

async function getMap(map_id){
    const result = await pool.query(`select * from maps where map_id=${map_id}`);
    return result.rows;
}

async function positionsGet(map_id){
    const result=await pool.query(`select maps_characters.character_id, positionx, positiony, width, height, characters.image_path, name from maps_characters join characters on characters.character_id=maps_characters.character_id where map_id=${map_id}`);
    return result.rows;
}

module.exports={getMap, positionsGet};