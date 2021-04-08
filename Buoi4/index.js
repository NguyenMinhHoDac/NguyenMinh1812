let list = document.getElementById('list');
document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  let fullname = document.getElementById('fullname').value;
  let age = document.getElementById('age').value;
  let t=kt(fullname,age);
  if (t===true) {
    list.innerHTML += '<li>' + fullname +"  "+age + '</li>';
  } 
  else
  {
    #b1.innerHTML +="Vui long nhap lai";
  }
}
function kt(fullname,age){
  if (fullname==='') {return false;}
  for (let i = 0; i < fullname.length; i++) {
    if (fullname.charCodeAt(i)>=48 && ten.charCodeAt(i)<=57) {return false}
  }
  if (age==='') {return false;}
  if (age<= 0 || age>=100) {return false;}
  return true;
}
