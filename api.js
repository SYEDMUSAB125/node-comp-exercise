const express = require("express");
const dataConnect = require("./connect");
const mongoDb = require("mongodb")
const app = express();
 app.use(express.json())
app.get("/", async (req,res)=>{
    let data = await dataConnect();
    let resp = await data.find({}).toArray();
    res.send(resp)
    
});
app.post("/insert", async (req,res)=>{
    let data = await dataConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
})
app.put("/put",async (req,res)=>{
    let data = await dataConnect();
    let result = await data.updateOne({name:req.body.name},
        {$set:req.body})
        if(result.acknowledged){
            res.send("data updated succesfully")
        }

})
app.delete("/:id",async (req , res)=>{
 let data = await dataConnect();
 let result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)});
 if(result.acknowledged){
    res.send("data deleted succefully");
 }
})
app.listen(5000);