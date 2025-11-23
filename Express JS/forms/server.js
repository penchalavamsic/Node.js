const express=require("express")
const app=express()
const path=require("path")
//for encoding the data
app.use(express.urlencoded({extended:true}))
//for path
app.use(express.static("public"))
app.post("/submit",(req,res)=>{
    const{first, second, third}=req.body
    res.send(`
        <h2>String are</h2>
        <p>${first}</p>
        <p>${second}</p>
        <p>${third}</p>
    `)
})
app.listen(3000,()=>{
    console.log("server running at http://localhost:3000")
})