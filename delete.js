const dataConnect = require("./connect");
const deleteData=async ()=>{
    let db =  await dataConnect();
    let res = await db.deleteMany({
        name:"musab"
    });
  
};
deleteData();