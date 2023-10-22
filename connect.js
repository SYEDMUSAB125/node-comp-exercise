const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const dataBase = "e-comm";
const client = new MongoClient(url)
 let dataConnect = async ()=>{
   let result = await client.connect();
   let db =  result.db(dataBase);
 return db.collection("products")
 }
 module.exports =  dataConnect ;