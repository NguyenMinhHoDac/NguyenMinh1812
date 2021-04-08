let list1 = document.getElementById('list1');
let list2 = document.getElementById('list2');
let er= document.getElementById('box')
function kt(fullname,age){
  if (fullname==='') {return false;}
  for (let i = 0; i < fullname.length; i++) {
    if (fullname.charCodeAt(i)>=48 && fullname.charCodeAt(i)<=57) {return false;}
  }
  if (age==='') {return false;}
  if (age<= 0 || age>=100) {return false;}
  return true;
}

document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  let fullname = document.getElementById('fullname').value;
  let age = document.getElementById('age').value;
  let t=kt(fullname,age);
  if (t===true) {
    list1.innerHTML +=  fullname +'<br>';
    list2.innerHTML += age +'<br>';
  } 
  else
  {
    er.style.display="block";
  }
}

function closebox(){
  er.style.display="none";
}

