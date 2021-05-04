  var today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let hour = today.getHours();
        let minus = today.getMinutes();
        let second = today.getSeconds();
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minus").innerHTML = minus;
    document.getElementById("second").innerHTML = second;
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    
function update(){
    location.reload();
}