let list = document.getElementById('list');
document.getElementById('form').onsubmit = (e) => {
  e.preventDefault();
  let fullname = document.getElementById('fullname').value;
  let age = document.getElementById('age').value;
  list.innerHTML += '<li>' + fullname +"  "+age + '</li>';
}
