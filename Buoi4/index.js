let list = document.getElementById('list');
document.getElementById('form').onsubmit = (e) => {
  // ngăn chặn load trang khi bấm submit
  e.preventDefault();
  let fullname = document.getElementById('fullname').value;
  let age = document.getElementById('age').value;
  console.log(fullname+" "+age);
  list.innerHTML += '<li>' + fullname +" "+age + '</li>';
}
