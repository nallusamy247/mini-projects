const inputBox = document.getElementById("textinput");
const listContainer = document.getElementById("listcontainer");

function addTask(){
        if(inputBox.value === ''){
            alert("enter something");
        }
        else{
            let li = document.createElement("li");
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let Span = document.createElement("span")
            Span.innerHTML="\u0078";
            li.appendChild(Span)
        }
        inputBox.value = "";
        saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML  =  localStorage.getItem("data");
}
showTask();
//83738665896577