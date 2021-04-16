let img1 = document.getElementById("preview-image");
function  preview_image(event){
    let files = event.target.files;
    let blob = URL.createObjectURL(files[0]);
    document.querySelector("#preview-image").src = blob;
    img1.style.width="20%";
    img1.style.height="20%";
    document.getElementById("input-image").style.width="30%";
}
var id=0;
id = sessionStorage.getItem('id');
function themDuLieu(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let category = document.querySelector("#category").value;
    let getimg = document.querySelector("#preview-image").src;console.log(name.charCodeAt(0));
    if (name==''||name.length>10||(name.charCodeAt(0)>=48 && name.charCodeAt(0)<=57)){
        document.getElementById("note1").style.display="block";
        document.getElementById("note2").style.display="none";
    }
    else{
        document.getElementById("note1").style.display="none";
        if(category=='Chọn khóa'){
            document.getElementById("note2").style.display="block";
        }
        else{   
            document.getElementById("note2").style.display="none"; 
            id++;
            sessionStorage.setItem('id',id);
            let new_row = 
                `<tr id="row">
                    <td id="cell-id">${id}</td>
                    <td><input type="text" readonly value='${name}' id="cell-name"></td>
                    <td>        
                        <select id="cell-category">
                            <option>${category}</option>
                        </select>
                    </td>
                    <td>
                        <img src="${getimg}" id="cell-img">
                        <input type="file" accept="image/*" id="input-newimage">
                    </td>
                    <td id="action">
                        <button onclick="editRow(event)" class="btn btn-outline-primary" id="button-edit">Edit</button>
                        <button onclick="deleteRow(event)" class="btn btn-outline-danger" id="button-delete">Delete</button>
                        <button onclick="saveRow(event)" class="btn btn-outline-success" id="button-save">Save</button>
                        <button onclick="cancelRow(event)" class="btn btn-outline-secondary" id="button-cancel">Cancel</cancel>
                    </td>
                </tr>`
            document.querySelector("tbody").innerHTML += new_row;
        sessionStorage.setItem(id,[name,category,getimg]);
        }
    }
}
function layDuLieu(){
    let id1 = sessionStorage.getItem('id');
    for(let i=1;i<=id1;i++){
        let data = sessionStorage.getItem(i);
        data = data.split(',');
        let new_row = 
        `<tr id="row">
            <td id="cell-id">${i}</td>
            <td><input type="text" readonly value='${data[0]}' id="cell-name"></td>
            <td>            
                <select id="cell-category">
                    <option>${data[1]}</option>
                </select>
            </td>
            <td>
                <img src="${data[2]}" id="cell-img">
                <input type="file" accept="image/*" id="input-newimage">
            </td>
            <td id="action">
                <button onclick="editRow(event)" class="btn btn-outline-primary" id="button-edit">Edit</button>
                <button onclick="deleteRow(event)" class="btn btn-outline-danger" id="button-delete">Delete</button>
                <button onclick="saveRow(event)" class="btn btn-outline-success" id="button-save">Save</button>
                <button onclick="cancelRow(event)" class="btn btn-outline-secondary" id="button-cancel">Cancel</cancel>
            </td>
        </tr>`
        document.querySelector("tbody").innerHTML += new_row;  
    }
}
function editRow(event){
    event.target.parentNode.parentNode.querySelector("input").readOnly = false;
    event.target.parentNode.parentNode.querySelector("#cell-name").style.border="solid 1px";
    event.target.parentNode.parentNode.querySelector("#cell-category").innerHTML="<option>Chọn khóa</option><option>K18</option><option>K19</option><option>K20</option>";
    event.target.parentNode.parentNode.querySelector("#input-newimage").style.display="inline-block";
    event.target.parentNode.parentNode.querySelector("#input-newimage").onchange =() =>{
        let files = event.target.parentNode.parentNode.querySelector("#input-newimage").files;
        let blob = URL.createObjectURL(files[0]);
        event.target.parentNode.parentNode.querySelector("#cell-img").src = blob;}
    event.target.parentNode.parentNode.querySelector("#button-edit").style.display="none";
    event.target.parentNode.parentNode.querySelector("#button-delete").style.display="none";
    event.target.parentNode.parentNode.querySelector("#button-save").style.display="inline-block";
    event.target.parentNode.parentNode.querySelector("#button-cancel").style.display="inline-block";
}
function saveRow(event){
    event.target.parentNode.parentNode.querySelector("input").readOnly = true;
    let id2 = event.target.parentNode.parentNode.querySelector("#cell-id").innerHTML; 
    let name = event.target.parentNode.parentNode.querySelector("#cell-name").value; 
    let category = event.target.parentNode.parentNode.querySelector("#cell-category").value;
    let getimg = event.target.parentNode.parentNode.querySelector("#cell-img").src;
    sessionStorage.setItem(id2,[name,category,getimg]);
    event.target.parentNode.parentNode.querySelector("#cell-category").innerHTML=`<option>${category}</option>`;
    event.target.parentNode.parentNode.querySelector("#cell-name").style.border="none";
    event.target.parentNode.parentNode.querySelector("#input-newimage").style.display="none";
    event.target.parentNode.parentNode.querySelector("#button-edit").style.display="inline-block";
    event.target.parentNode.parentNode.querySelector("#button-delete").style.display="inline-block";
    event.target.parentNode.parentNode.querySelector("#button-save").style.display="none";
    event.target.parentNode.parentNode.querySelector("#button-cancel").style.display="none";
}
function deleteRow(event){
    let i;
    let length1 = sessionStorage.getItem('id');
    let id4 = Number(event.target.parentNode.parentNode.querySelector("#cell-id").innerHTML); 
    for (i=id4+1;i<=length1;i++){console.log(i);
        sessionStorage.setItem(i-1,sessionStorage.getItem(i));
    }
    sessionStorage.setItem('id',length1-1);
    event.target.parentNode.parentNode.remove("#row");
    sessionStorage.removeItem(length1);
    location.reload();
}
function cancelRow(event){
    let id3 = event.target.parentNode.parentNode.querySelector("#cell-id").innerHTML;
    let data = sessionStorage.getItem(id3); 
    data = data.split(',');
    event.target.parentNode.parentNode.querySelector("input").readOnly = true;
    event.target.parentNode.parentNode.querySelector("#cell-name").value=data[0];
    event.target.parentNode.parentNode.querySelector("#cell-name").style.border="none";
    event.target.parentNode.parentNode.querySelector("#cell-category").innerHTML=`<option>${data[1]}</option>`;
    event.target.parentNode.parentNode.querySelector("#input-newimage").style.display="none";
    event.target.parentNode.parentNode.querySelector("#cell-img").src=data[2];
    event.target.parentNode.parentNode.querySelector("#button-edit").style.display="inline-block";
    event.target.parentNode.parentNode.querySelector("#button-delete").style.display="inline-block";
    event.target.parentNode.parentNode.querySelector("#button-save").style.display="none";
    event.target.parentNode.parentNode.querySelector("#button-cancel").style.display="none";
}
 document.querySelector("#input-image").onchange = preview_image;
 document.querySelector("#form").onsubmit = themDuLieu;
 layDuLieu();