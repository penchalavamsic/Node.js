const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("Hello welcome to Express")
})
//for starting the server(mandatory)
app.listen(3000,()=>{
    console.log("Server is running on port 3000 http://localhost:3000")
})
