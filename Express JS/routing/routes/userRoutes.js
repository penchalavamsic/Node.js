const express=require("express")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("hello")
})
router.post("/",(req,res)=>{
    res.send("hello")
})
router.put("/",(req,res)=>{
    res.send("hello")
})
router.delete("/",(req,res)=>{
    res.send("hello")
})
module.exports=router