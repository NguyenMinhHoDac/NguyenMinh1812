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

document.getElementById('i1c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i1b").classList.remove("active");
}
document.getElementById('i1a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i1b").classList.add("active");
}

document.getElementById('i2c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i2b").classList.remove("active");
}
document.getElementById('i2a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i2b").classList.add("active");
}

document.getElementById('i3c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i3b").classList.remove("active");
}
document.getElementById('i3a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i3b").classList.add("active");
}

document.getElementById('i4c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i4b").classList.remove("active");
}
document.getElementById('i4a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i4b").classList.add("active");
}

document.getElementById('i5c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i5b").classList.remove("active");
}
document.getElementById('i5a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i5b").classList.add("active");
}

document.getElementById('i6c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i6b").classList.remove("active");
}
document.getElementById('i6a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i6b").classList.add("active");
}

document.getElementById('i7c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i7b").classList.remove("active");
}
document.getElementById('i7a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i7b").classList.add("active");
}

document.getElementById('i8c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i8b").classList.remove("active");
}
document.getElementById('i8a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i8b").classList.add("active");
}

document.getElementById('i9c').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="none";
  document.getElementById("i9b").classList.remove("active");
}
document.getElementById('i9a').onclick = () => {
  document.getElementById('carouselExampleFade').style.display="block";
  document.getElementById("i9b").classList.add("active");
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
