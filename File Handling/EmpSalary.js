let fs=require("fs")
let tSalary=0
const data={
   " 1001":{name:"Harry" ,dept:"Sales", salary:"23000"},
    "1002":{name:"Sarita" ,dept:"Accounts",salary :"20000"},
    "1003":{name:"Monika",dept:"TechSupport",salary:"35000"}
}
let f=fs.writeFile("emp.txt",JSON.stringify(data),(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created")
    }
})
let f1=fs.readFile("emp.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        const d=JSON.parse(data) //parsing the data
        for(let key in d){
            tSalary+=Number(d[key].salary) //getting salary
        }
    }
    console.log("Total salary is"+tSalary)
})
