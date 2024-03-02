const inputbox = document.getElementById("input-box");
// console.log(inputbox);
const  listcontanier = document.getElementById("list-container")
function AddTask(){
    if(inputbox.value===''){
        alert("you mustadd your task")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontanier.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value ="";
    saveData();
}
listcontanier.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName  === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listcontanier.innerHTML);
}
function showtask(){
    listcontanier.innerHTML=localStorage.getItem("data");
}
showtask();
