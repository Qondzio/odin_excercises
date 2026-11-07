const { error } = require('console');
const express=require('express');
const path=require('path');

const app=express();
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,"assets")));
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

//routes
app.get("/", (req,res)=>res.render('index', {messages: messages}));
app.get("/new", (req,res)=>{
    res.render("form");
})
app.get("/message/:id", (req,res)=>{
    if(!messages[req.params.id]){
        return res.status(404).render('404')
    }
    res.render('previewMessage', {message: messages[req.params.id]});
})
app.get((req,res)=>{    
    res.status(404).render('404');
})
app.post('/new', (req,res)=>{
    messages.push({
        text: req.body.author,
        user: req.body.message,
        added: new Date()
    })
    res.redirect('/');
})


app.listen(5000, (error)=>{
    if(error){
        throw error;
    }
    console.log("Server is running!");
})