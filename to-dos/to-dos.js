const api_url = "https://jsonplaceholder.typicode.com/users/1/todos";
var pode = false;
async  function getData(){
    if(pode == false){
        const reponse = await fetch(api_url);
        const data = await reponse.json();
        const table = document.getElementById('table');
        data.forEach(post =>  {
        let tr = createTrForTable(post.id, post.title, post.completed)
        table.appendChild(tr);
        });
        pode = true;
    }
}
getData();
function createTrForTable(id, title, completed)
{
    let tr = document.createElement("tr");
    tr.id = id;

    let thTitle = document.createElement("th");
    let h5Title = document.createElement("h5");
    let pTitle = document.createElement("p");
    pTitle.innerHTML = title;    

    h5Title.appendChild(pTitle);
    thTitle.appendChild(h5Title);

    let thcompleted = document.createElement("th");
    let h5completed = document.createElement("h5");
    let spancompleted = document.createElement("span");
    //spancompleted.innerHTML = completed;
    if (completed == true){
        spancompleted.innerHTML = 'Feito'; 
    }else{
        spancompleted.innerHTML = 'Não Feito';
    }
    //spancompleted.innerHTML = completed;

    h5completed.appendChild(spancompleted);
    thcompleted.appendChild(h5completed);

    tr.appendChild(thTitle);
    tr.appendChild(thcompleted);

    return tr;
}
function limpar(){
    if(pode == true){
        document.getElementById('table').innerHTML = '';
        pode = false
    }
    
}