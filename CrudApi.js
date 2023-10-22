const express = require("express");
 require("./config");
const Product = require("./product");
const app = express();
app.use(express.json());
app.post("/create",async(req,res)=>{
   
//    console.log(req.body)
    const data =  new Product(req.body);
    // console.log(product)
    const result = await data.save()
    res.send(result);

})
app.get("/list",async (req,res)=>{
    const data= await Product.find();
    res.send(data)

})
app.delete("/delete/:_id",async (req,res)=>{
    //  console.log(req.params)
    const data =  await Product.deleteOne(req.params);
    res.send(data)
});
app.put("/update/:_id", async(req,res)=>{
    const data = await Product.updateOne(req.params,{$set:req.body});
    res.send(data)
})
app.listen(5000)
