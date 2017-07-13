// let list = []

// addTask() function
// removeTask() ''''
// BuildLIst ''''

let addNewTask = function() {
  let li = document.createElement("li")
  let newTask = document.getElementById("addTask").value
  let textNode = document.createTextNode(newTask)
  li.appendChild(textNode);
  document.getElementById("list").appendChild(li)
}

let removeAllTask = function() {
  let listItem = document.getElementById("list")
if(listItem.innerHTML.length == 0){
  alert("No list Items to remove")
}else{
 confirm("Are you sure you want to remove all tasks")
 listItem.innerHTML = ""
}
}

let removeItem = function() {
  var task = document.getElementsByTagName('li');
  task[0].addEventListener("click", change);
function change(event) {
    task[0].remove()
  }
}
