let x=[12,25,6,3,6,94,6];
function find(){
    let i;
    let j;
    let t;
    for(i=0;i<x.length;i++)
      for(j=i+1;j<x.length;j++)
      {
        if (x[i]>x[j])
        {
          t=x[i];
          x[i]=x[j];
          x[j]=t;
        }
      }
    let d=1;
    let max=1; 
    t=x[1];
    for(i=0;i<x.length-1;i++)
    {
      if (x[i]===x[i+1]) 
      {
        d++;
        if (d>max) 
        {
          max=d;
          t=x[i];
        }
      }
    }
    return t;
}
console.log(find(x));