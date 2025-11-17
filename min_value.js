function min(a){
    let min=a[0]
    for(i=1;i<a.length;i++){
        if(a[i]<min){
            min=a[i]
        }
    }
    return min
}
let a=[1,2,3,4,0,4,-5]
console.log(min(a))