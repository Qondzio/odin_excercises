const routes=require("./routes/route.js");
const path=require('node:path');
const express=require("express");
const app=express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(4000, (err)=>{
    if(err){
        throw err;
    }
    console.log('Running!');
    
})