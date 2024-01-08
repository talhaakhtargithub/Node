const express=require('express');
// const path =require('path');
const app=express();


// const pubPath=path.join(__dirname,'public');

// // app.use(express.static(pubPath))


// app.set('view engine','ejs');

app.get('',(req,resp)=>{
    resp.send("Welcome Home")
})
app.get('.user',(req,resp)=>{
    resp.send("Welcome Users")
})



app.listen(5000)
