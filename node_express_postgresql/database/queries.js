const pool=require("./db.js");


async function getUsers(){
    const {rows}=await pool.query("SELECT * FROM usernames")
    return rows;
}

async function insertUser(username){
    pool.query("INSERT INTO usernames (username) VALUES ($1)",[username])
}

async function findUser(param){
    const {rows}=await pool.query(`select * from usernames where username ilike '%${param}%'`)
    return rows
}

async function deleteALL(){
    await pool.query("DELETE FROM usernames");
    await pool.query("TRUNCATE TABLE usernames RESTART IDENTITY")
}

module.exports={getUsers,insertUser,findUser,deleteALL};