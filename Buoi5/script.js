let ava = document.getElementById('box');
let chatbox = document.getElementById('block6');

function boxchat(){
    ava.style.display="none";
    chatbox.style.display="block";
}

document.getElementById('hide').onclick=() => {
    ava.style.display="block";
    chatbox.style.display="none";
}

document.getElementById('close').onclick=() => {
    chatbox.style.display="none";
}

document.getElementById('search').onclick=() => {
    document.getElementById('find').style.display="none";
}