let a='abcde';
function child(){
    let d=Math.floor(a.length/2)-1; 
    return a.substr(d,3);
  }
 console.log(child());