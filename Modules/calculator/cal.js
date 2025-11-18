//calculator using modules
function add(a,b){
    console.log(a+b)
}
function sub(a,b){
    console.log(a-b)
}
function mul(a,b){
    console.log(a*b)
}
function div(a,b){
    console.log(a/b)
}
function square(a){
    console.log(a*a)
}
function min(a,b,c){
    console.log(Math.min(a,b,c))
}
function max(a,b,c){
    console.log(Math.max(a,b,c))
}
module.exports={add,sub,mul,div, square, min, max}