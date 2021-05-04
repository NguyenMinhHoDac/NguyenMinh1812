let x=5;
let y=10;
function songuyento(x,y){
  let i,j;
  let d;
  let a=[];
  for (i=x;i<=y;i++)
  {
    d=0;
    for (j=2;j<i;j++)
      if (i%j===0) d++; 
    if (d===0) a.push(i);
  }
  return a;
}
console.log(songuyento(x,y))