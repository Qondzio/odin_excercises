const express=require('express');
const path=require('node:path');
const routes=require('./routes/routes.js');
const app=express();


app.use(express.urlencoded({ extended: true }));
app.use('/', routes);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'assets')));


app.listen(5000, (err)=>{
    if(err){
        throw err;
    }
    console.log('Server is running!');    
})