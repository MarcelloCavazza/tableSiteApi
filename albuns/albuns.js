const api_url = "https://jsonplaceholder.typicode.com/users/1/albums";
var pode = false;
async function getData(){
    if(pode == false){
        const response = await fetch(api_url);
        const data = await  response.json();
        const table = document.getElementById('table');
        data.forEach(post => {
        let tr = createTrForTable(post.id, post.title)
        table.appendChild(tr);
        });
        pode = true
    }
    
}
getData();

function createTrForTable(id, title){
    let tr = document.createElement("tr");
    tr.id = id;

    let thTitle = document.createElement("th");
    let h5Title = document.createElement("h5");
    let pTitle = document.createElement("p");
    pTitle.innerHTML = title;    

    h5Title.appendChild(pTitle);
    thTitle.appendChild(h5Title);
    tr.appendChild(thTitle);

    return tr;
}

function limpar(){
    if(pode == true){
      document.getElementById('table').innerHTML = '';
      pode = false;  
    }
}
