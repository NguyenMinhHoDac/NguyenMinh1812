let x=['sds','nksde','sefe'];
function dem(){
  let b=[];
  let i;
  for (i=0;i<x.length;i++)
  {
    b[i]=x[i].length;
  }
  let max=b[1];
  let t=1;
  for (i=0;i<b.length;i++)
    if (max<b[i]) {
      max=b[i];
      t=i;
    }
  return x[t];
}
console.log(dem());
