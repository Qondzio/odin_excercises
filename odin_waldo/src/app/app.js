const express=require('express');
const routes=require('./routes/router.js');
const cors=require('cors');
const app=express();

app.use(cors());
app.use('/', routes);


app.listen(3000, (err)=>{
    if(err){
        throw err;
    }
    console.log('Server is running on: 127.0.0.1:3000');
})