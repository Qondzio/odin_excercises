const express=require('express');
const path=require('node:path');
const routes=require('./routes/routes.js');
const app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/', routes)


app.listen(3000, (err)=>{
    if(err){
        throw err;
    }
    console.log('Server is running');
    
})