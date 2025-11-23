const express=require("express")
const path=require("path")
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
//simple interest calculation
app.post("/submit",(req,res)=>{
    const pamt=Number(req.body.pamt)
    const rate=Number(req.body.rate)
    const time=Number(req.body.time)
    const si=(pamt*rate*time)/100
    res.send(`The simple interest is ${si}`)
})
app.listen(3000,()=>{
    console.log("server started at http://localhost:3000")
})