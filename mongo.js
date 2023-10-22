// const dataConnect = require('./connect');
//  dataConnect().then((res)=>{
//  res.find({}).toArray().then((data)=>{
//     console.warn(data)
//  })

const dataConnect = require("./connect")

//  })
const getData= async ()=>{
 let res = await dataConnect();
 let data = await res.find({name:"musab nadeem"}).toArray();
 console.log(data)
};
getData();
