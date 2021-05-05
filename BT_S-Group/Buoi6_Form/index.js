let list = document.getElementById('list');
 document.getElementById('form').onsubmit = async(e) =>  {
  e.preventDefault();
  let fullname = document.getElementById('fullname').value;
  await luuDuLieu();
   list.innerHTML='';
   layDuLieu();
}
layDuLieu();
luuDuLieu = async(t)=>{
    let name = document.getElementById('fullname').value;
    let user={
        'name':name,
    }
    let result = await axios.post("https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users",user);
}

async function layDuLieu(){
    let users = await axios.get("https://6065d36cb8fbbd00175677e7.mockapi.io/s-group/users");
    console.log(users.data);
    for (var i=0;i<users.data.length;i++ )
    {
        list.innerHTML += '<li>' +"ID: "+users.data[i].id+ "   "+ "Name:" +users.data[i].name +'</li>';
    }
}



