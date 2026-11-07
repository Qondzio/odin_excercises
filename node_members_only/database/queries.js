const db=require('./db_connect.js');

async function addUser(username,password){
    await db.query("INSERT INTO users (username, role, password) VALUES ($1, $2, $3)", [
        username,
        'guest',
        password
    ]);
}

async function promoteAdmin(userID){
    await db.query(`UPDATE users SET role='admin' where id=${userID}`)
}

async function promoteMember(userID){
    await db.query(`UPDATE users SET role='member' where id=${userID}`)
}

async function getMessages(){
    return await db.query(`select message, username, role, creation_date from messages join users on user_id=users.id`);
}

async function addMessage(message, user){
    await db.query(`insert into messages (message, user_id) values($1,$2)`,[message,user]);
}

module.exports={addUser,promoteAdmin,promoteMember, getMessages, addMessage};