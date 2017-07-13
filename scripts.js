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
  // Clears text box after input
  document.getElementById('addTask').value='';
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


document.getElementsByTagName("ul")[0].onclick = function (e) {
  var el = e.target;
var task = document.getElementsByTagName('li');
  task[[].indexOf.call(el.parentNode.children, el)].style.setProperty("text-decoration", "line-through");
}

// Clear form code to be added
const clearForm = () => {

}
//remove functionality
// document.getElementsByTagName("ul")[0].onclick = function (e) {
//   var el = e.target;
// var task = document.getElementsByTagName('li');
//   task[[].indexOf.call(el.parentNode.children, el)].remove();
// }
