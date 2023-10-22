const dataConnect = require("./connect");

let updateData=async()=>{
    let db = await dataConnect();
    const res = await db.updateMany({
        name:"musab1"
    },{$set:{
        name:"offline bhi kam hojaega "
    }}); 
    console.log(res)
}
updateData();