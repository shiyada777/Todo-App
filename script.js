// Taken all the variables 

let inputBox=document.getElementById("inputBox");
let addTaskButton=document.getElementById("addTaskButton");
let orderList=document.getElementById("orderList");

//add task function
addTaskButton.addEventListener("click",function(){
    if(inputBox.value===""){
        console.log("return")
    }
    let task=inputBox.value.trim();
    let div=document.createElement("div");
    div.innerHTML=`
    <input type="checkbox" name="" id="checkBox">
    <p id="taskText">${task}</p>
     <p id="date">Date</p>
    <button id="editTaskButton">Edit</button>
    <button id="deleteTaskButton">Delete</button>`
   
    div.classList.add("elementCreated")
    taskLists.append(div)
    inputBox.value="";
});