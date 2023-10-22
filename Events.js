const express = require("express");
const EventEmitter= require("events");
const app = express();
const event = new EventEmitter();
let count = 0;
event.on("Home Api",()=>{
    console.log("Event Called",++count) 
})

app.get("/",(req,res)=>{
    res.send("home api")
   
    event.emit("Home Api")
});
app.get("/search",(req,res)=>{
    res.send("search api")
event.emit("Home Api")
});
app.get("/update",(req,res)=>{
    res.send("update api")
    event.emit("Home Api");
});
app.listen(5000)