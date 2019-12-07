const express =require('express');
const mongoose= require('mongoose');
const user=require('./routes/user');
const bodyParser = require('body-parser');
const app=express();


app.use(bodyParser.json())

app.get('/',async(req,res,next)=>
{
    console.log("hp");    
    res.send("get api from index")
})

app.use('/user',user)
app.listen(3000,(err)=>
{
    console.log("server is running");
})

// let uri='mongodb://127.0.0.1:27017/userDB';
let uri='mongodb+srv://username:userpass@cluster0-fcf8r.mongodb.net/testDB?retryWrites=true&w=majority';
mongoose.connect(uri,{UseNewUrlParser:true},(error)=>
{
    if(error)
    {
        console.log(error);
    }
    else
    {
        console.log("mongo db connected.............");       
    }
})

