const express=require('express');
const path =require('path');
const app=express();


const pubPath=path.join(__dirname,'public');

app.use(express.static(pubPath))

app.listen(5000)
