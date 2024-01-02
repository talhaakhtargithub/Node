const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`;  // Corrected variable name to dirPath

// fs.writeFileSync(filePath, 'This is me Talha');

// fs.readFile(filePath,'utf8',(arr,item)=>{
//     console.log(item)
// })

fs.appendFile(filePath,' And file name is apple.txt',(err)=>{
    if(!err){console.log("File is Updated");}
})