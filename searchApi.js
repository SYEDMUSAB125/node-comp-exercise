const express = require("express");
require("./config");
const Product = require("./product");
const multer = require("multer");
const app =express();
const upload = multer({
    storage:multer.diskStorage({
        destination:function (req,file,cb){
            cb(null,'upload')
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user")
app.get("/search/:key",async (req , res)=>{
    const data = await  Product.find({
        "$or":
            [
               { "name":{$regex:req.params.key}},
               {"category":{$regex:req.params.key}}
            ]
        
    })
    res.send(data);
});
app.post("/upload",upload,(req,res)=>{
    res.send("file uploaded")
})

app.listen(5000);