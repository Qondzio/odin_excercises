const query=require('../db/queries.js');

async function getMap(req,res){
    const result=await query.getMap(req.params.map_id);
    res.send(result);
}

async function getPositions(req,res){
    const result=await query.positionsGet(req.params.map_id);
    res.send(result);
}

module.exports={getMap, getPositions};