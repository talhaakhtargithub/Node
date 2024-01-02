const express=require('express');
const path =require('path');
const app=express();


const pubPath=path.join(__dirname,'public');

// app.use(express.static(pubPath))

app.get('',(_,resp)=>{
    resp.sendFile(`${pubPath}/app.html`)
})



app.get('/about',(_,resp)=>{
    resp.sendFile(`${pubPath}/about.html`)
})



app.get('*',(_,resp)=>{
    resp.sendFile(`${pubPath}/help.html`)
})
app.listen(5000)
