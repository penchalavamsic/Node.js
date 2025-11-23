let fs=require("fs")
let data={
    " 1001":{name:"Harry" ,dept:"Sales", salary:"23000"},
    "1002":{name:"Sarita" ,dept:"Accounts",salary :"20000"},
    "1003":{name:"Monika",dept:"TechSupport",salary:"35000"}
}
let f=fs.writeFile("Employees.txt",JSON.stringify(data),(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})
let f2=fs.appendFile("E.txt", JSON.stringify(data),"utf-8",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("data appended")
    }
})
