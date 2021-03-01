const api_url = "https://jsonplaceholder.typicode.com/users/1/posts";
var pode = false;
async  function getData(){
    if(pode == false){
         const reponse = await fetch(api_url);
        const data = await reponse.json();
        const table = document.getElementById('table');
        data.forEach(post =>  {
        let tr = createTrForTable(post.id, post.title, post.body)
        table.appendChild(tr);
        });
        pode = true
    }
}
getData();
function createTrForTable(id, title, body)
{
    let tr = document.createElement("tr");
    tr.id = id;

    let thTitle = document.createElement("th");
    let h5Title = document.createElement("h5");
    let pTitle = document.createElement("p");
    pTitle.innerHTML = title;    

    h5Title.appendChild(pTitle);
    thTitle.appendChild(h5Title);

    let thBody = document.createElement("th");
    let h5Body = document.createElement("h5");
    let spanBody = document.createElement("span");
    spanBody.innerHTML = body;

    h5Body.appendChild(spanBody);
    thBody.appendChild(h5Body);

    tr.appendChild(thTitle);
    tr.appendChild(thBody);

    return tr;
}
function limpar(){
    if(pode == true){
       document.getElementById('table').innerHTML = '';
       pode = false; 
    }
    
}