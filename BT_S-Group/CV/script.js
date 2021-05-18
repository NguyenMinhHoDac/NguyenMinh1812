document.getElementById('button3').onclick = () => {
    document.getElementById('blockbody').style.display="none";
  }

document.getElementById('button1').onclick = () => {
    document.getElementById('blockbody').style.display="block";
  }

document.getElementById('button2').onclick = () => {
    document.getElementById('blockbody').style.display="block";
  }

function moveTop(){
    document.getElementById("tab").animate({marginTop: "0px"}, 500);
    document.getElementById("menu").animate({opacity: 0}, 500);
}

