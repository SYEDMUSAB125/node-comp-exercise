const mongoose =  require("mongoose");
const ProductSchema = new mongoose.Schema({
    name:String,
    price:Number,
    brand:String
  });

// const saveInDb= async ()=>{
//   await mongoose.connect("mongodb://localhost:27017/e-comm");
//   const ProductModel = mongoose.model("products",ProductSchema);
//   const data = new ProductModel({name:"hp",price:78});
//   let result = await data.save()
//   console.log(result)
// }
// saveInDb();

const updateInDb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/e-comm");
    const ProductModel = mongoose.model("products",ProductSchema);
    const data = await ProductModel.updateOne({name:"annosha"},{
        $set:{brand:"iphone 15", name:"ranjesh"}
    });
    if(data.acknowledged){
        console.log("data succesfully updated")
    }
}
updateInDb();