var A=[];
var x=345; 
function kt(x){
    while(x!==0) 
    {
        A.push(x % 10);
        x=Math.floor(x/10); 
    }
    for(let i=1; i<A.length;i++)
    {
        if (A[i]>A[i-1]) return false;
        else return true;
    }
}
let t=kt(x);
console.log(t);