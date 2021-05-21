document.getElementById('button3').onclick = () => {
    document.getElementById('blockbody').style.animationName="hide";
    document.getElementById('button3').style.animationName="hideb3";
    document.getElementById('button6').style.animationName="hideb6";
    document.getElementById('blockbody-bg').style.animationName="hidebg";
    setTimeout(function(){document.getElementById('blockbody-bg').style.display="none";document.getElementById('blockbody').style.display=""},500);
  }

document.getElementById('button1').onclick = () => {
    document.getElementById('blockbody').style.animationName="showb";
    document.getElementById('button3').style.animationName="showb3";
    document.getElementById('button6').style.animationName="showb6";
    document.getElementById('blockbody').style.display="block";
    document.getElementById('blockbody-bg').style.display="block";
    document.getElementById('blockbody-bg').style.animationName="showbg";
  }

document.getElementById('button2').onclick = () => {
    document.getElementById('blockbody').style.animationName="showb";
    document.getElementById('button3').style.animationName="showb3";
    document.getElementById('button6').style.animationName="showb6";
    document.getElementById('blockbody').style.display="block";
    document.getElementById('blockbody-bg').style.display="block";
    document.getElementById('blockbody-bg').style.animationName="showbg";
  }

function hideMenu() {
    document.getElementById("menu").classList.remove("open");
    document.getElementById("tab").classList.add("move1");
    document.getElementById("menu").classList.add("hide");
    document.getElementById('blockbody').style.display="block";
    setTimeout(function(){document.getElementById('menu').style.display="none"},500);
}

function openMenu() {
  document.getElementById("menu").classList.remove("hide");
  document.getElementById("tab").classList.remove("move1");
  document.getElementById('menu').style.display="flex";
  document.getElementById('menu').style.opacity="none";
  setTimeout(function(){document.getElementById("menu").classList.add("open")},50);
}

document.getElementById("bar").onclick = () =>{
  let kt=document.getElementById('menu').style.display;
  if (kt=="flex") {hideMenu()}
  else {openMenu()};
}
