let fs=require("fs")
const arr=["aaa","bbb","ccc"]
const data=arr.join("|")
fs.writeFile("names.txt",data,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")
    }
})