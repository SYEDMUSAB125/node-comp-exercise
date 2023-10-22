// const fs = require('fs');
// fs.writeFileSync("code","text.sinsh")
// const http = require("http");
//  http.createServer((req,res)=>{
//     res.write('hello change occur');
//     res.end()
//  }).listen(4500)
// console.log("agar nahi krti tw me kia karta haee allah")
// const http = require('http');
// const data = require('./data');
// http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"application\json"})
//     res.write(JSON.stringify(data));
//     res.end();
// }
// ).listen(5000)

// const fs = require("fs");
// const input = process.argv;
// if(input[2]== "add"){
//     fs.writeFileSync(input[3],input[4])
// }else if(input[2]== "remove"){
//     fs.unlinkSync(input[3])
// }else{
//     console.log("invalid input")
// }
// const fs = require('fs');
// const path = require("path");
// const dirpath = path.join(__dirname,"files")  
// console.log(dirpath)
// for(let i=0;i<5;i++){
//     fs.writeFileSync(dirpath + "/helloworld"+i+".txt" ,`this is amzaing`)
// }
// fs.readdir(dirpath,(err,files)=>{
//     files.forEach((file)=>{
//         console.log(file)
//     })
// })

const fs = require("fs");
const path = require("path");
const dirPath= path.join(__dirname,"crud");
const file = `${dirPath}/crud.txt`;
// fs.writeFileSync(file,"this is my txt file");
// fs.readFile(file, "utf8", (err,item)=>{
//     console.log(item)
// })
// fs.appendFile(file," and or bhi maza araha hai doston",(err)=>{
//     if(!err) console.log("file is updated")
// });
// fs.renameSync(file,`${dirPath}/bhenskitang.txt`)
//Mongo Connection;
// const {MongoClient} = require("mongodb");
// const url = "mongodb://localhost:27017";
// const dataBase="e-comm"
// const client= new MongoClient(url);
//  const dataConnect= async ()=>{
//     let result = await client.connect();
//      db = result.db(dataBase);
//     return  db.collection("products") 
//  }
//  module.exports=dataConnect;
