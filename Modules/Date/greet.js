//greeting module
function greet(hrs){
    d=new Date()
    h=d.getHours()
    if(h<12){
        console.log("Good Morning")
    }else if(h>=12 && h<17){
        console.log("Good Afternoon")
    }else{
        console.log("Good Evening")
    }
}
module.exports=greet