const makeData = require("./connect");
const insertData = async ()=>{
    let collection = await makeData();
    const res = await collection.insertMany([{name:"musab",brand:"iphone"},{name:"musab2",brand:"iphone2"},
    {name:"musab1",brand:"iphone1"}
])

if(res.acknowledged) console.log("data inserted")
   
}
insertData();