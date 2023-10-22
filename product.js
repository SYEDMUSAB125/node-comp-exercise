const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:String,
    price:Number, 
    brand:String,
    category:String
}) 
const model = mongoose.model("products",productSchema);
 module.exports = model;