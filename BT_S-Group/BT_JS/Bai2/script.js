let today = new Date();

document.getElementById("date1").innerHTML = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
document.getElementById("date2").innerHTML = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
document.getElementById("date3").innerHTML = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear();
document.getElementById("date4").innerHTML = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();