document.getElementById('button3').onclick = () => {
    document.getElementById('blockbody').style.display="none";
  }

document.getElementById('button1').onclick = () => {
    document.getElementById('blockbody').style.display="block";
  }

document.getElementById('button2').onclick = () => {
    document.getElementById('blockbody').style.display="block";
  }

function hideMenu() {
    document.getElementById("tab").classList.add("move1");
    document.getElementById("menu").classList.add("hide");
    document.getElementById('blockbody').style.display="block";
    setTimeout(function(){document.getElementById('menu').style.display="none"},500);
}

function openMenu() {
  document.getElementById('menu').style.display="flex";
  document.getElementById("menu").classList.remove("hide");
  document.getElementById("tab").classList.remove("move1");
}

document.getElementById("bar").onclick = () =>{
  let kt=document.getElementById('menu').style.display;
  if (kt=="flex") {hideMenu()}
  else {openMenu()};
}
