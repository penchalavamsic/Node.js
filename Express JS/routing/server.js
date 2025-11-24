const express=require("express")
const app=express()
app.use(express.json())
const userRouter=require("./routes/userRoutes")
app.use("/users",userRouter)
app.get("/",function(req,res){
    res.send("hello")
})
app.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})
