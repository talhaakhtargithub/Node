

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index',{title:'My APK',message:"Talha's App"})
});
module.exports=router