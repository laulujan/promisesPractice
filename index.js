function getInfo() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        for (let i = 0; i < myJson.length; i++) {
          
          let arr = myJson[i];
          getUserName(arr.userId).then(name => {
            crearTr(arr.id, name, arr.title, arr.body);
          });
        }
      }); 
}  

document.getElementById("btn").onclick = function() {
    getInfo(); showHidden();
};

function crearTr(id, name, title, body){
    var tableRef=document.getElementById("tablebody");
    var newrow = tableRef.insertRow();
    var newCellId = newrow.insertCell(0);
    var newTextId = document.createTextNode(id);
    newCellId.appendChild(newTextId);
    var newCellName = newrow.insertCell(1);
    var newTextName = document.createTextNode(name);
    newCellName.appendChild(newTextName)
    var newCellTitle = newrow.insertCell(2);
    var newTextTitle = document.createTextNode(title);
    newCellTitle.appendChild(newTextTitle);
    var newCellBody = newrow.insertCell(3);
    var newTextBody = document.createTextNode(body);
    newCellBody.appendChild(newTextBody)
}
  //ASYNC AWAIT

    
    var getUserName = async (id) =>{
      var response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      var data = await response.json();
      return data.name;
    }
    getUserName(1)
    .then((data) => console.log(data));

function showHidden(){
    let hiddentable = document.getElementById("tbl");
    hiddentable.classList.remove("hidden");
}
