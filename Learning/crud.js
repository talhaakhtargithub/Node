const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;  // Corrected variable name to dirPath


//>> File Created

// fs.writeFileSync(filePath, 'This is me Talha');


//>> File Read


// fs.readFile(filePath,'utf8',(arr,item)=>{
//     console.log(item)
// })

//>> File Updated
// fs.appendFile(filePath,' And file name is apple.txt',(err)=>{
//     if(!err){console.log("File is Updated");}
// })

//>> File Name is Updated
fs.rename(filePath,`${dirPath}/frui.txt`,(err)=>{
    if(!err){console.log("FileName is Updated");}
})