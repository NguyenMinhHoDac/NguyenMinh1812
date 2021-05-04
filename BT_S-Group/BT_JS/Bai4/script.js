let a='abcd';
function next(){
  var b=a.split('');
  for(var i=0;i<a.length;i++){
      b[i]=String.fromCharCode(a.charCodeAt(i)+1);
  }
  return b.join('');
  }
 console.log(next());